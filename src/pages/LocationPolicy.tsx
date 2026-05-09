import LegalDocument from '../components/LegalDocument';
import { locationPolicyContent } from '../content/locationPolicyContent';

export default function LocationPolicy() {
  return <LegalDocument document={locationPolicyContent} />;
}
