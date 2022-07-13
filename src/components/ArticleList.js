import react from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList({posts}){
  //map the content of the list to post
  const postData = posts.map((post)=> (

  <Article
     key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.minutes}

  />

   ));

  return(
    <main>
      {postData}
    </main>
  )
}

export default ArticleList;