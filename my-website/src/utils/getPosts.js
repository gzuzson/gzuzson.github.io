// utils/getPosts.js
import fm from 'front-matter';

const postFiles = [
  { slug: 'analyzing-fight-night-markets', path: '/posts/third-post.md' },
  { slug: 'building-the-community-paramedicine-needs-assessment-tool', path: '/posts/second-post.md' },
  { slug: 'why-i-build', path: '/posts/first-post.md' },
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
