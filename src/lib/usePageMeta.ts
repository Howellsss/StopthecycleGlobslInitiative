import { useEffect } from 'react';

const SITE_NAME = 'Stop The Cycle';
const DEFAULT_DESCRIPTION =
  'Stop The Cycle equips young people with the skills, confidence and opportunities to shape the future. Digital skills, leadership, mentorship, community and the Global Summit.';

/** Sets the browser tab title and meta description for the current page. */
export function usePageMeta(title?: string, description: string = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE_NAME}` : `${SITE_NAME} — Youth Development · African Leadership · Global Summit`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}
