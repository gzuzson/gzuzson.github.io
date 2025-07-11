// utils/getPosts.js
import fm from 'front-matter';

export async function getPostList() {
  const files = ['third-post.md', 'second-post.md', 'first-post.md']; // manually list or automate later

  const posts = await Promise.all(
    files.map(async (file) => {
      const res = await fetch(`/posts/${file}`);
      const text = await res.text();

      const { attributes, body } = fm(text);
      return {
        ...attributes,
        content: body,
        slug: attributes.slug || file.replace('.md', ''),
      };
    })
  );

  return posts;
}
