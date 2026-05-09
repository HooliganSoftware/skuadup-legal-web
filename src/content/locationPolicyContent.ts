import type { LegalDocumentContent } from './legalTypes';

export const locationPolicyContent: LegalDocumentContent = {
  title: 'SkuadUp Location Policy',
  lastUpdated: 'May 9, 2026',
  intro: ['This page explains how SkuadUp uses approximate location to power discovery features.'],
  sections: [
    {
      id: 'how-location-is-used',
      title: '1. How Location Is Used',
      bullets: [
        'SkuadUp may use approximate location to help users discover nearby games, teams, and players.',
        'Location data may use approximate coordinates or a location-derived discovery area that can be offset or generalized by approximately 8 miles.'
      ]
    },
    {
      id: 'what-location-is-not-for',
      title: '2. What Location Is Not For',
      bullets: [
        'SkuadUp is not designed to show precise real-time location to other users.',
        'Location discovery is not for emergency response, precise tracking, safety monitoring, or attendance verification.'
      ]
    },
    {
      id: 'your-controls',
      title: '3. Your Controls',
      bullets: [
        'You can control location access through your device permissions.',
        'You can also use available in-app settings to manage discovery behavior when supported.'
      ]
    },
    {
      id: 'personal-responsibility',
      title: '4. Personal Responsibility',
      bullets: [
        'Users are responsible for deciding whether to meet, play with, or communicate with others in person.',
        'Always use your judgment and follow venue rules, local laws, and basic personal safety practices.'
      ]
    }
  ]
};
