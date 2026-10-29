import { describe, expect, it } from 'vitest';
import { HOSTED_ADMIN_URL, needsHostedGoogleSignIn } from '@/lib/admin-auth';

describe('Google sign-in hosting', () => {
  it('moves external website sign-in to the hosted admin page', () => {
    expect(needsHostedGoogleSignIn('jamicleaninginc.com')).toBe(true);
    expect(needsHostedGoogleSignIn('www.jamicleaninginc.com')).toBe(true);
    expect(HOSTED_ADMIN_URL).toBe('https://jamicleaning.lovable.app/admin');
  });
  it('keeps managed sign-in on the hosted app and preview', () => {
    expect(needsHostedGoogleSignIn('jamicleaning.lovable.app')).toBe(false);
    expect(needsHostedGoogleSignIn('localhost')).toBe(false);
    expect(needsHostedGoogleSignIn('id-preview--e21d0b69-a5fa-449b-a22c-76e259184604.lovable.app')).toBe(false);
  });
});