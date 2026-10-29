import { describe, it, expect } from 'vitest';
import { isApprovedAdminEmail, MAINTENANCE_RECIPIENT, contactSchema, maintenanceSchema, passwordSchema } from '@/lib/admin-validation';
describe('JAMI admin requirements', () => {
  it('does not impose extra password length or character requirements', () => {
    expect(passwordSchema.safeParse('a').success).toBe(true);
    expect(passwordSchema.safeParse('plainpassword').success).toBe(true);
    expect(passwordSchema.safeParse('').success).toBe(false);
  });
  it('retains the original JAMI account', () => expect(isApprovedAdminEmail('accounting@jamicleaninginc.com')).toBe(true));
  it('allows the additional JAMI account', () => expect(isApprovedAdminEmail('jramin0521@gmail.com')).toBe(true));
  it('allows Peace Country Marketing admin access', () => expect(isApprovedAdminEmail('peacecountrymarketing@gmail.com')).toBe(true));
  it('rejects unapproved accounts', () => expect(isApprovedAdminEmail('other@example.com')).toBe(false));
  it('addresses maintenance to Peace Country Marketing', () => expect(MAINTENANCE_RECIPIENT).toBe('peacecountrymarketing@gmail.com'));
  it('accepts actual contact input and rejects invalid contact', () => {
    const input = { name: 'JAMI Test', contact: '780-897-3077', service: 'residential', timing: 'week', message: 'Kitchen clean' };
    expect(contactSchema.safeParse(input).success).toBe(true);
    expect(contactSchema.safeParse({ ...input, contact: 'invalid' }).success).toBe(false);
  });
  it('rejects empty maintenance requests', () => expect(maintenanceSchema.safeParse({subject:'',description:'',priority:'normal'}).success).toBe(false));
});