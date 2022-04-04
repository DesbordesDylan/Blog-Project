import React from 'react'
import {useLocation} from 'react-router-dom'
import './Article.css'


export default function Article() {

  const location = useLocation()

  return (
    <div className="article-content">
        <h1>Votre article :</h1>
        <h2>{location.state.title}</h2>
        <p>{location.state.body}</p>
    </div>
  )
}