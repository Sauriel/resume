import { get, writable } from 'svelte/store';
import type { WP_REST_API_Posts, WP_REST_API_Post } from 'wp-types';

const posts = writable<WP_REST_API_Posts>([]);

function init() {
  async function getPosts(page: number): Promise<void> {
    let totalPages: number;
    return fetch(`https://blog.sauriel.net/wp-json/wp/v2/posts/?page=${page}`)
      .then((res) => {
        const xWpTotalPages = res.headers.get('X-WP-TotalPages');
        if (xWpTotalPages) {
          totalPages = Number.parseInt(xWpTotalPages);
        }
        return res.json();
      })
      .then((wpPosts: WP_REST_API_Posts) => {
        blogStore.add(wpPosts);
        if (page < totalPages) {
          return getPosts(page + 1);
        }
      });
  }

  getPosts(1);
}

init();

const blogStore = {
  set: posts.set,
  subscribe: posts.subscribe,
  clear: () => posts.set([]),
  hasPosts: () => get(posts).length > 0,
  add: (newPosts: WP_REST_API_Posts) => posts.update((value) => [...value, ...newPosts]),
  findPost: (slug: string): WP_REST_API_Post | null =>
    get(posts).find((post) => post.slug === slug) ?? null,
};

export default blogStore;
