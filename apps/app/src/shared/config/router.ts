import { APP_PREF, API_PREF } from '.';

export const appMarkName = 'mark' as const;

export const appRoutes = {
  pref: APP_PREF,
  admin: {
    glob: '/admine',
    local: {
      users: 'users',
    }
  },
  auth: {
    glob: '/auth',
    local: {
      signIn: 'sign-in',
      confirm: 'confirm',
    }
  },
  home: {
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
