const EXTERNAL_WEBSITE_HOSTS = new Set(['jamicleaninginc.com', 'www.jamicleaninginc.com']);
export const HOSTED_ADMIN_URL = 'https://jamicleaning.lovable.app/admin';

export function needsHostedGoogleSignIn(hostname: string) {
  return EXTERNAL_WEBSITE_HOSTS.has(hostname.toLowerCase());
}