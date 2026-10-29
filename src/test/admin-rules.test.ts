import { describe, it, expect } from 'vitest';
import { ADMIN_EMAIL, MAINTENANCE_RECIPIENT, contactSchema, maintenanceSchema } from '@/lib/admin-validation';
describe('JAMI admin requirements', () => {
  it('uses the approved JAMI account', () => expect(ADMIN_EMAIL).toBe('accounting@jamicleaninginc.com'));
  it('addresses maintenance to Peace Country Marketing', () => expect(MAINTENANCE_RECIPIENT).toBe('peacecountrymarketing@gmail.com'));
  it('accepts actual contact input and rejects invalid contact', () => {
    const input = { name: 'JAMI Test', contact: '780-897-3077', service: 'residential', timing: 'week', message: 'Kitchen clean' };
    expect(contactSchema.safeParse(input).success).toBe(true);
    expect(contactSchema.safeParse({ ...input, contact: 'invalid' }).success).toBe(false);
  });
  it('rejects empty maintenance requests', () => expect(maintenanceSchema.safeParse({subject:'',description:'',priority:'normal'}).success).toBe(false));
});