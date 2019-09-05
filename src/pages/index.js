import React from "react";
import { withRouteData } from "react-static";
import { Link } from "@reach/router";

export default withRouteData(({ posts }) => (
  <React.Fragment>
    <header>
      <h1>A Blog</h1>
      <div className="header-nav">
        <Link to="/">Posts</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
    <main>
      {posts.map(post => (
        <div className="post">
          <Link
            key={post.link}
            to={`/post/${post.link}`}
            className="post-title"
          >
            <h3>{post.title}</h3>
          </Link>
          <small className="post-date">{post.date}</small>
          <p className="post-excerp">
            {post.content.substring(0, 100) + "..."}
          </p>
        </div>
      ))}
    </main>
    <footer>
      <small>raharditya.com</small>
      <p>Copyright 2019</p>
    </footer>
  </React.Fragment>
));
