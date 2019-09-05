import React from "react";
import { withRouteData } from "react-static";
import Markdown from "react-markdown";
import { Link } from "@reach/router";

export default withRouteData(
  ({ post }) =>
    console.log(post) || (
      <React.Fragment>
        <header>
          <h1>A Blog</h1>
          <div className="header-nav">
            <Link to="/">Home</Link>
          </div>
        </header>

        <section className="post-header">
          <h3 className="post-title">{post.title}</h3>
          <small className="post-date">{post.date}</small>
        </section>

        <article className="post-content">
          <Markdown source={post.content} />
        </article>

        <footer>
          <small>raharditya.com</small>
          <p>Copyright 2019</p>
        </footer>
      </React.Fragment>
    )
);
