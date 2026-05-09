export type TermsArchiveEntry = {
  label: string;
  effectiveDate: string;
  href: string;
};

export const termsArchiveEntries: TermsArchiveEntry[] = [
  {
    label: 'Current Terms of Service',
    effectiveDate: 'May 9, 2026',
    href: '/terms'
  }
];
