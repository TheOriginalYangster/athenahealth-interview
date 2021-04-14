import React, { useEffect, useState } from 'react'
import SearchBar from 'material-ui-search-bar'
import './Header.scss'

function Header({ search, setSearch, setPage }) {

  const onSubmit = x => {
    setSearch(x)
    setPage(1)
  }

  return (
    <div className="Header">
      <h1 className="Header-title">GitHub Challenge</h1>
      <div className="Header-searchbar">
        <SearchBar
          placeholder={'Search Repositories...'}
          onRequestSearch={onSubmit}
        />
      </div>
    </div>
  );
}

export default Header;