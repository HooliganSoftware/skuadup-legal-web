import type { LegalSection } from '../content/legalTypes';

type TableOfContentsProps = {
  sections: LegalSection[];
};

export default function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <nav className="toc" aria-label="Table of contents">
      <h2>Contents</h2>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
