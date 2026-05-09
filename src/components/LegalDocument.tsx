import type { LegalDocumentContent } from '../content/legalTypes';
import TableOfContents from './TableOfContents';

type LegalDocumentProps = {
  document: LegalDocumentContent;
};

export default function LegalDocument({ document }: LegalDocumentProps) {
  return (
    <article className="shell legal-document">
      <div className="legal-layout">
        <aside className="legal-sidebar">
          <TableOfContents sections={document.sections} />
        </aside>
        <div className="legal-main">
          <header className="legal-header">
            <h1>{document.title}</h1>
            <p className="last-updated">Last Updated: {document.lastUpdated}</p>
          </header>

          {document.intro?.map((paragraph) => (
            <p key={paragraph} className="legal-paragraph">
              {paragraph}
            </p>
          ))}

          {document.importantNotice ? <aside className="important-notice">{document.importantNotice}</aside> : null}

          <section className="legal-sections">
            {document.sections.map((section) => (
              <section id={section.id} key={section.id} className="legal-section">
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="legal-paragraph">
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="legal-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </section>
        </div>
      </div>
    </article>
  );
}
