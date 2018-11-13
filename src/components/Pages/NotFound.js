import React from 'react'

export default function NotFound() {
  return (
    <div>
      <h1 className="display-4">
          <span style={{fontWeight: "bolder"}}>404</span> - 
          <span style={{color: "red", fontWeight: "bolder", textShadow: "2px 2px 2px black"}}>Page Not Found</span></h1>
      <p className="lead">Sorry, that page does not exist.</p>
    </div>
  )
}
