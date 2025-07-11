// BlogList.jsx
import React, { useEffect, useState } from 'react';
import { getPostList } from '../utils/getPosts';
import { Link } from 'react-router-dom';
import styles from './BlogList.module.css';

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostList().then(setPosts);
  }, []);

  return (
    <div className={`${styles.blogList} content`}>
      <h2 className={styles.title}>Blog</h2>
      {posts.map(post => (
        <div key={post.slug} className={styles.blogPreview}>
          <h3 className={styles.blogTitle}>{post.title}</h3>
          <p className={styles.blogSummary}>{post.summary}</p>
          <Link to={`/blog/${post.slug}`} className={styles.readMore}>
            Read more →
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
