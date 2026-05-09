import { termsArchiveEntries } from '../content/termsArchiveContent';

export default function TermsArchive() {
  return (
    <section className="shell terms-archive" aria-labelledby="terms-archive-heading">
      <h1 id="terms-archive-heading">Terms of Service Archive</h1>
      <p>Previous versions of SkuadUp Terms of Service are listed here for reference.</p>
      <ul>
        {termsArchiveEntries.map((entry) => (
          <li key={`${entry.label}-${entry.effectiveDate}`}>
            <a href={entry.href}>{entry.label}</a>
            <span>Effective: {entry.effectiveDate}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
