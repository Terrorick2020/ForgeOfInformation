import { APP_PREF, API_PREF } from '.';

export const appMarkName = 'mark' as const;

export const appRoutes = {
  pref: APP_PREF,
  admin: {
    isSpecBlock: false,
    glob: '/admine',
    local: {
      users: 'users',
    }
  },
  auth: {
    isSpecBlock: false,
    glob: '/auth',
    local: {
      signIn: 'sign-in',
      confirm: 'confirm',
    }
  },
  home: {
    isSpecBlock: true,
    glob: '/home',
    local: {
      chat: 'chat',
      downloads: 'downloads',
      profile: 'profile',
      storage: 'storage',
    }
  },
  preview: '/',
  notFound: '*',
} as const;

export const apiRoutes = {
  pref: API_PREF,
} as const;
