import React from 'react'

export const ParksPerPopularityPagination = ({ popularityPerPage, totalPopularity, popularityPaginate }) => {

  const popularityPageNumbers = [];
  
  for( let i = 1; i <= Math.ceil( totalPopularity / popularityPerPage ); i++ ) {
    popularityPageNumbers.push(i);
  }

  return (
    <>
      <ul className='pagination'>
        { popularityPageNumbers.map( popularityNumber => (
          <li key={ popularityNumber } className='page-item'>
            <a onClick={ () => popularityPaginate( popularityNumber ) } href='!#' className='page-link'>
              { popularityNumber }
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ParksPerPopularityPagination
