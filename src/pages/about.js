import React from "react";
import { withRouteData } from "react-static";
import { Link } from "@reach/router";

export default withRouteData(
  ({ descriptions }) =>
    console.log(descriptions) || (
      <React.Fragment>
        <header>
          <h1>A Blog</h1>
          <div className="header-nav">
            <Link to="/">Home</Link>
          </div>
        </header>

        {/* <article className="post-content">
          {descriptions.map(
            description => console.log(description) || <p>Hello :)</p>
          )}
        </article> */}

        <footer>
          <small>raharditya.com</small>
          <p>Copyright 2019</p>
        </footer>
      </React.Fragment>
    )
);
