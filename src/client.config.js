// src/client.config.js
export const client = {
  // Business info
  name: 'Green Thumb Landscaping',
  tagline: 'Professional Lawn Care in Orange County',
  phone: '(949) 555-0182',
  email: 'info@greenthumb.com',
  address: '123 Main St',
  city: 'Irvine',
  state: 'CA',
  zip: '92604',
  serviceArea: ['Irvine', 'Newport Beach', 'Laguna Hills', 'Mission Viejo'],

  // Branding
  primaryColor: '#2d5a3d',
  secondaryColor: '#4a8c5c',
  industry: 'landscaping',  // used to select icon set and demo variant
  // Services (shown on homepage + services page)
  services: ['Lawn Care', 'Garden Design', 'Irrigation', 'Tree Trimming'],

  // CMS connection — points to your shared Payload instance
  cmsUrl: 'https://cms.sebvia.com/',
  tenantSlug: 'greenthumb',   // unique ID per client in Payload

  // Analytics (swap per client)
  googleAnalyticsId: 'G-XXXXXXX',
  googleMapsApiKey: '',

  // Social
  facebook: 'https://facebook.com/greenthumblandscaping',
  instagram: '',
  yelp: '',
}
