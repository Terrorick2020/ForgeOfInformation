import { APP_SECRET } from '@/shared';

const encoder = new TextEncoder();
const decoder = new TextDecoder();

type EncryptedPayload = {
  iv: number[];
  data: number[];
};

async function getKey(usage: KeyUsage[]): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(APP_SECRET),
    { name: 'AES-GCM' },
    false,
    usage
  );
}

export async function encrypt<T>(data: T): Promise<EncryptedPayload> {
  const encoded = encoder.encode(JSON.stringify(data));
  const key = await getKey(['encrypt']);

  const iv = crypto.getRandomValues(new Uint8Array(12));

  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoded
  );

  return {
    iv: Array.from(iv),
    data: Array.from(new Uint8Array(encrypted))
  };
}

export async function decrypt<T>(payload: EncryptedPayload): Promise<T> {
  const key = await getKey(['decrypt']);

  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: new Uint8Array(payload.iv) },
    key,
    new Uint8Array(payload.data)
  );

  return JSON.parse(decoder.decode(decrypted)) as T;
}