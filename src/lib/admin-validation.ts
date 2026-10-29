import { z } from 'zod';

export const MAINTENANCE_RECIPIENT = 'peacecountrymarketing@gmail.com';
export const ADMIN_EMAILS = ['accounting@jamicleaninginc.com', 'jramin0521@gmail.com'] as const;
export const isApprovedAdminEmail = (email: string) => ADMIN_EMAILS.some(approved => approved === email.trim().toLowerCase());
export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Enter your name.').max(100),
  contact: z.string().trim().min(3).max(255).refine(value => z.string().email().safeParse(value).success || /^\+?[\d\s().-]{7,25}$/.test(value), 'Enter a valid phone number or email.'),
  service: z.enum(['', 'residential', 'commercial', 'vehicle', 'rv', 'aviation', 'yard', 'pressure', 'carpet-spot', 'hat', 'shoe', 'snow', 'other']),
  timing: z.enum(['', 'asap', 'week', 'month', 'recurring']),
  message: z.string().trim().max(3000),
});
export const maintenanceSchema = z.object({
  subject: z.string().trim().min(1, 'Enter a subject.').max(150),
  description: z.string().trim().min(1, 'Describe your request.').max(5000),
  priority: z.enum(['normal', 'urgent']),
});