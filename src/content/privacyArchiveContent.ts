export type PrivacyArchiveEntry = {
  label: string;
  effectiveDate: string;
  href: string;
};

export const privacyArchiveEntries: PrivacyArchiveEntry[] = [
  {
    label: 'Current Privacy Policy',
    effectiveDate: 'May 9, 2026',
    href: '/privacy'
  }
];
