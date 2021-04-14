import React from 'react'
import Repo from './Children/Repo.js'
import Pagination from './Children/Pagination'
import './Body.scss'

function Body(props) {

  let { repos, loading } = props

  return (
    <div className="Body">
      <div className="Body-items">
        { repos && <>{repos.map((repo, i) => <Repo {...props} repo={repo} i={i} key={i}/>)}</>}
        { loading && <img className="Body-items-spinner" src="Spinner-1s-200px.gif" />}
      </div>
      <Pagination {...props}/>
    </div>
  );
}

export default Body;