import React from 'react';
import Article from '../components/Article'
import blogData from '../data/blog';

const ArticleList = () => {
    return (
      <main>
        {blogData.posts.map(post => (
          <Article 
            key={post.id}
            title={post.title}
            date={post.date || "January 1, 1970"}
            preview={post.preview}
          />
        ))}
      </main>
    )
  }
  
export default ArticleList

