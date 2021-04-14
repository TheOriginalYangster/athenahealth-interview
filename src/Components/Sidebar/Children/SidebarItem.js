import React from 'react'
import Radio from '@material-ui/core/Radio'

import './SidebarItem.scss'

const SidebarItem = ({ l, setLang, lang: cl, setPage }) => {
  //l = language from parent array
  //cl = current lang hook
  const changeLang = () => {
    setLang(l)
    setPage(1)
  }

  return (
    <div className="SidebarItem" >
      <Radio
        onClick={changeLang}
        checked={l === cl}
        size="small"
      />
      <span onClick={changeLang} >{l}</span>
    </div>
  )
}

export default SidebarItem