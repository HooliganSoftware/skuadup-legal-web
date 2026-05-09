import LegalDocument from '../components/LegalDocument';
import { termsContent } from '../content/termsContent';

export default function Terms() {
  return <LegalDocument document={termsContent} />;
}
