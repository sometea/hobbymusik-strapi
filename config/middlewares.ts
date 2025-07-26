export default ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            `https://${env('HETZNER_BUCKET')}.${env('HETZNER_REGION')}.${env('HETZNER_BASE_URL')}`,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'market-assets.strapi.io',
            `https://${env('HETZNER_BUCKET')}.${env('HETZNER_REGION')}.${env('HETZNER_BASE_URL')}`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
