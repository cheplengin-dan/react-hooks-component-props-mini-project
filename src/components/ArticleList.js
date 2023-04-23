import React from 'react';
import Article from '../components/Article';
import blogData from "../data/blog";


const ArticleList = (props) => {
    console.log(props);
    const article = props.posts.map((posts)=> (
        <Article key={posts.id} title={posts.title} date={posts.date} preview={posts.preview} />
    ))

    return (
        <main>
{article} 
       </main>
    )
   
    
};

export default ArticleList

