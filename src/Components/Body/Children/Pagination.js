import React from 'react'

import './Pagination.scss'

const Pagination = ({ page, setPage, count, avg }) => {

  const lastPage = Math.ceil(count/30)

  const goPrev = () => setPage(page - 1)
  const goNext = () => setPage(page + 1)

  const showPrev = page > 1
  const showNext = page < lastPage

  return(
    <div className="Pagination">
      <div className="Pagination-buttons">
        {showPrev && <button onClick={goPrev}>{'<'}</button>}
        <span>{page} of {lastPage}</span>
        {showNext && <button onClick={goNext}>{'>'}</button>}
      </div>
      <div className="Pagination-statistics">
        <span>Average Stars of Page: {avg}</span>
      </div>
    </div>
  )
}

export default Pagination