import React from 'react'

export const ParksPerStatePagination = ({ parksPerPage, totalParks, parksPaginate }) => {

  const parkPageNumbers = [];
  
  for ( let i = 1; i <= Math.ceil( totalParks / parksPerPage ); i++ ) {
    parkPageNumbers.push(i);
  }

  return (
    <>
      <ul className='pagination'>
        { parkPageNumbers.map( parkNumber => (
          <li key={ parkNumber } className='page-item'>
            <a onClick={ () => parksPaginate( parkNumber ) } href='!#' className='page-link'>
              { parkNumber }
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ParksPerStatePagination
