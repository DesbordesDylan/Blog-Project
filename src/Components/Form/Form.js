import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import './Form.css'

export default function Form() {

  const [article, setArticle] = useState({
    title: "",
    body: ""
  })

  const dispatch = useDispatch();

  let navigate = useNavigate()

  const handleForm = e => {
    e.preventDefault();

    dispatch({
      type: "ADDARTICLE",
      payload: article
    })

    setArticle({
      title: "",
      body: ""
    })

    navigate("/")
  }

  console.log(article)

  const handleInputs = e => {

    if (e.target.classList.contains('input-title')) {
      const newObjState = { ...article, title: e.target.value }
      setArticle(newObjState);
    }
    else if (e.target.classList.contains('input-content')) {
      const newObjState = { ...article, body: e.target.value }
      setArticle(newObjState);
    }

  }

  return (
    <form onSubmit={handleForm}>
      <div className="container-form">
        <div className="title-form">
          <label className="label-form">Titre de l'article</label>
          <input onChange={handleInputs} value={article.title} className="input-title" placeholder='Ecrire le titre...'></input>
        </div>
        <div className="content-form">
          <label className="label-form">Contenu de l'article</label>
          <textarea onChange={handleInputs} value={article.body} className="input-content" placeholder="Ecrire le contenu de l'article..."></textarea>
        </div>
        <button className="btn-form">Valider</button>
      </div>
    </form>
  )
}
