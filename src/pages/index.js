import * as React from "react";
import { Link } from "gatsby";

export default function IndexPage() {
  return (
    <>
      <h1>Welcome to my beautiful page suckas</h1>
      <Link to="about"></Link>
    </>
  );
}
export const Head = () => <title>Home Page</title>;
