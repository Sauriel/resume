import type { Handle } from '@sveltejs/kit';
import { dev } from '$app/environment';

/**
 * Factory that generates a function to update response headers in dev mode in order to
 * incorporate headers specified as part of vite config. If we don't do this, then fetching,
 * e.g., html @ "/" in dev mode will not include our headers!
 *
 * In prod, need to use adapter-specific means to specify custom headers.
 *
 * @returns Function that updates response headers.
 */
const updateResponseHeadersInDevFactory = (): ((r: Response) => void) => {
  const doNothing = (r: Response): void => undefined;

  /** In prod, need to use an adapter like netlify, cloudflare, etc. that can support custom headers. Adding headers here has no effect in a purely static site. */
  if (!dev) {
    return doNothing;
  }

  // Generate a fn that updates the response headers.
  const updateHeaders = (r: Response): void => {
    r.headers.append('Cross-Origin-Opener-Policy', 'same-origin');
    r.headers.append('Cross-Origin-Embedder-Policy', 'require-corp');
  };
  return updateHeaders;
};

const updateResponseHeadersInDev = updateResponseHeadersInDevFactory();

/** @type {import('@sveltejs/kit').Handle}
 * https://kit.svelte.dev/docs/hooks#handle
 */
export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event, {});

  updateResponseHeadersInDev(response);

  return response;
};
