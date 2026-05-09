import { privacyArchiveEntries } from '../content/privacyArchiveContent';

export default function PrivacyArchive() {
  return (
    <section className="shell terms-archive" aria-labelledby="privacy-archive-heading">
      <h1 id="privacy-archive-heading">Privacy Policy Archive</h1>
      <p>Previous versions of the SkuadUp Privacy Policy are listed here for reference.</p>
      <ul>
        {privacyArchiveEntries.map((entry) => (
          <li key={`${entry.label}-${entry.effectiveDate}`}>
            <a href={entry.href}>{entry.label}</a>
            <span>Effective: {entry.effectiveDate}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
