/**
 * `no-cdn-cache` middleware
 */

import type { Core } from '@strapi/strapi';

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    if (ctx.request.url.includes('/content-manager')) {
      ctx.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, private');
    }
    await next();
  };
};
