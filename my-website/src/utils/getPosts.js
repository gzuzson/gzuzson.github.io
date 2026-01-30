// utils/getPosts.js
import fm from 'front-matter';

const postFiles = [
  { slug: 'risk-pricing-market-integrity-first-principles'},
  { slug: 'analyzing-fight-night-markets'},
  { slug: 'building-the-community-paramedicine-needs-assessment-tool'},
  { slug: 'why-i-build'},
];

export async function getPostList() {
  const fm = (await import('front-matter')).default;

  const posts = await Promise.all(
    postFiles.map(async ({ slug, path }) => {
      const response = await fetch(`${process.env.PUBLIC_URL}/posts/${slug}.md`);
      const text = await response.text();
      const { attributes, body } = fm(text);
      return {
        ...attributes,
        content: body,
        slug,
      };
    })
  );

  return posts;
}
