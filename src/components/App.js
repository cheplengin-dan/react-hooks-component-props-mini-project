import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header"
import About from "../components/About"
import ArticleList from "../components/ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = {blogData.name} />
      <About img = "https://via.placeholder.com/215" alt = "blog logo">
        <p>{blogData.about}</p>
      </About>
      
    </div>
  );
}

export default App;
