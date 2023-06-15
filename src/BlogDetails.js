import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';

export default function BlogDetails() {
 const {id} = useParams()
 const {error , isPending , data: blog} = useFetch("http://localhost:8000/blogs/" + id)
 const history = useHistory()

 const hanelDlelete = () => {
  fetch("http://localhost:8000/blogs/" + blog.id,{
    method:"DELETE",
  })
  .then(() => {
        history.push("/")
  })
 }
  return (
    <div className="blog-details">
      {isPending && <di> Loading...</di>}
      {error && <h2>{error}</h2>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={hanelDlelete}>Delete</button>
        </article>
      )}
    </div>
  )
}
