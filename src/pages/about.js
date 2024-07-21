import * as React from "react";
import { Link } from "gatsby";

export default function AboutPage() {
  return (
    <>
      <h1>Welcome to the about page</h1>
      <Link to="/">Go back to Home</Link>
    </>
  );
}

export const Head = () => <title>Home Page</title>;
