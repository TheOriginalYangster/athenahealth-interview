import React from 'react'
import './Repo.scss'

const Repo = ({ repo, i, page, most }) => {
  const { owner, name, stargazers_count, html_url: url } = repo
  const { avatar_url, login } = owner

  const redirect = () => window.open(url, '_blank')
  const num = ((page - 1) * 30) + i + 1
  const diff = most - stargazers_count
 
  return (
    <div className="Repo">
      <span className="Repo-index">#{num}</span>
      <img className="Repo-image" onClick={redirect} src={avatar_url}/>
      <span className="Repo-name">{name}</span>
      <span className="Repo-owner">@{login}</span>
      <span className="Repo-stars">{stargazers_count} stars</span>
      <span className="Repo-difference">{diff} stars less than most popular</span>
    </div>
  )
}

export default Repo