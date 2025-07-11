import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostList } from '../utils/getPosts';
import ReactMarkdown from 'react-markdown';
import styles from './BlogPost.module.css';

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostList().then((allPosts) => {
      const found = allPosts.find(p => p.slug === slug);
      setPost(found);
    });
  }, [slug]);

  if (!post) return <p className={styles.notFound}>Post not found.</p>;

  return (
    <div className={`${styles.blogPost} content`}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.date}><em>{post.date}</em></p>
      <div className={styles.contentBody}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default BlogPost;
