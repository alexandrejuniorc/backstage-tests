import { SignInProviderConfig } from '@backstage/core-components';
import { githubAuthApiRef } from '@backstage/core-plugin-api';

export const providers: SignInProviderConfig[] = [
  {
    id: 'github',
    title: 'GitHub',
    message: 'Login using GitHub',
    apiRef: githubAuthApiRef,
  },
];
