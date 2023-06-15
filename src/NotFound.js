import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='not-found'>
        <h1>404</h1>
        <Link to="/">Back to home page</Link>
    </div>
  )
}
