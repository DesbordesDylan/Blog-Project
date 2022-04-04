import React from 'react'
import './Home.css'
import Card from '../../Components/Card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getArticles } from '../../redux/features/articles/articleReducer'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

export default function Home() {

  const { articles } = useSelector(state => ({
    ...state.articleReducer
  }))

  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(getArticles());
    }
  }, [])

  return (
    <>
      <h1 className="title-home">Liste des articles:</h1>
      <div className="container-article">
      {articles.map(item => {
        return (
          <Card key={uuidv4()}>
            <h3 className="title-card">{item.title}</h3>
            <p className="text-card">{item.body}</p>
            <Link to={
              `articles/${item.title.trim().replace(/\s+/g, '-')}`
            }
              state={{
                title: item.title,
                body: item.body
              }}
            >Lire l'article
            </Link>
          </Card>
        )
      })}
      </div>
    </>
  )
}
