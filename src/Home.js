import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading....</h2>}
      {data && <BlogList blogs={data} title="All Blogs!" />}
    </div>
  );
}
