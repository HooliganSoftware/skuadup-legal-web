export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocumentContent = {
  title: string;
  lastUpdated: string;
  intro?: string[];
  importantNotice?: string;
  sections: LegalSection[];
  contact?: string[];
};
