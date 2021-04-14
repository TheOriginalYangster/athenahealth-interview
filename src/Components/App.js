//Functions and Libraries
import React, { useEffect, useState } from 'react'
import { apiEndpointBuilder } from '../apiHelper'

//Components
import Body from './Body/Body'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

//Scss
import './App.scss';

function App() {

  //States
  const [count, setCount] = useState(1000)
  const [repos, setRepos] = useState(null)
  const [lang, setLang] = useState('All')
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [most, setMost] = useState(0)
  const [avg, setAvg] = useState(0)

  
  //Component did mount + on change
  useEffect(async () => {
    //Set loading state
    setRepos(null)
    setLoading(true)
    
    //Pinging GitHub API
    const endpoint = apiEndpointBuilder(10000, lang, page, search)
    const res = await fetch(endpoint)
    const data = await res.json()
    const repos = data.items
    const total_count = data.total_count

    if(repos){
      //Checking for largest star count -- most
      let max = repos[0].stargazers_count
      if(max > most) setMost(max)
      console.log('most', most)

      //Average star count of page
      let totalStarCount = 0
      for(let repo of repos){
        totalStarCount += repo.stargazers_count
      }
      setAvg(Math.round(totalStarCount/30))
    }

    //Set new state
    setCount(total_count > 1000 ? 1000 : total_count)
    setRepos(repos)
    setLoading(false)
  }, [lang, page, search])

  return (
    <div className="App">
      <Header
        search={search}
        setSearch={setSearch}
        setPage={setPage}
      />
      <Sidebar
        setLang={setLang}
        lang={lang}
        setPage={setPage}
      />
      <Body
        repos={repos}
        loading={loading}
        page={page}
        setPage={setPage}
        count={count}
        most={most}
        avg={avg}
      />
    </div>
  );
}

export default App;
