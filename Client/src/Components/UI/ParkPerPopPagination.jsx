import React from 'react'

export const ParkPerPopPagination = ({ popsPerPage, totalPops, popsPaginate }) => {

  const popPageNumbers = [];
  
  for( let i = 1; i <= Math.ceil( totalPops / popsPerPage ); i++ ) {
    popPageNumbers.push(i);
  }

  return (
    <>
      <ul className='pagination'>
        { popPageNumbers.map( popNumber => (
          <li key={ popNumber } className='page-item'>
            <a onClick={ () => popsPaginate( popNumber ) } href='!#' className='page-link'>
              { popNumber }
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ParkPerPopPagination
