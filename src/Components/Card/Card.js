import React from 'react'
import './Card.css'

export default function Card(props) {

  return (
    <div className="container-article">
      <div className="container-card">
        {props.children}
      </div>
    </div>
  )
}
