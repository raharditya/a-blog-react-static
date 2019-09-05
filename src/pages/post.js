import React from "react";
import { useRouteData } from "react-static";
import Markdown from "react-markdown";
import { Link } from "@reach/router";

export default () => {
  const { post } = useRouteData();
  return (
    <React.Fragment>
      <header>
        <h1>A Blog</h1>
        <div className="header-nav">
          <Link to="/">Home</Link>
        </div>
      </header>

      <section className="post-header">
        <h3 className="post-title">{post.title}</h3>
        <small className="post-date">5 September 2019</small>
      </section>

      <article className="post-content">
        {/* <Markdown source={post.content} /> */}
      </article>

      <footer>
        <small>raharditya.com</small>
        <p>Copyright 2019</p>
      </footer>
    </React.Fragment>
  );
};
