

import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ParksPerState from '../UI/ParksPerState'
import ParkPerPopularity from '../UI/ParkPerPopularity'

export const ParksAPIPage = ( props ) => {

  const APIStateValue = props.stateAPIValue
  const APIPopularityValue = props.popularityAPIValue

  const [ stateAPI, setStateAPI ] = useState([])
  const [ popularityAPI, setPopularityAPI ] = useState([])
  const [ loading, setLoading ] = useState(false);
  const [ currentParkPage, setCurrentParkPage ] = useState(1);
  const [ currentPopularityPage, setCurrentPopularityPage ] = useState(1);
  const [ parksPerPage ] = useState(10);
  const [ popularityPerPage ] = useState(10);

  const APIStateString = 'https://developer.nps.gov/api/v1/parks?stateCode=' + APIStateValue + '&api_key=qxk4vLHEmNpbSbhNjQNNcIaPoCTmi0MAZ5DQC0Is' 
  const APIPopularityString = 'https://developer.nps.gov/api/v1/parks?parkCode=' + APIPopularityValue + '&api_key=qxk4vLHEmNpbSbhNjQNNcIaPoCTmi0MAZ5DQC0Is' 
 
  useEffect(({ stateAPI, popularityAPI }) => {

    const getStateAPIArray = async ( states ) => {

      setLoading(true)
      const stateRes = await Axios.get( APIStateString )
      console.log( stateRes )

      states = setStateAPI( stateRes.data.data )
      setLoading(false)
    }

    const getPopularityAPIArray = async ( popularity ) => {

      const popularityRes = await Axios.get( APIPopularityString )
      console.log( popularityRes )

      popularity = setPopularityAPI( popularityRes.data.data )
    }

    if( APIStateValue !== '' ) {
      return getStateAPIArray( stateAPI )
    }

    if( APIPopularityValue !== '' ) {
      return getPopularityAPIArray( popularityAPI )
    }

  },[ APIStateString, APIPopularityString, APIStateValue, APIPopularityValue ] )

  // Get current posts
  const indexOfLastPark = currentParkPage * parksPerPage
  const indexOfFirstPark = indexOfLastPark - parksPerPage
  const indexOfLastPopularity = currentPopularityPage * popularityPerPage
  const indexOfFirstPopularity = indexOfLastPopularity - popularityPerPage
  const currentParks = stateAPI.slice( indexOfFirstPark, indexOfLastPark )
  const currentPopularity = popularityAPI.slice( indexOfFirstPopularity, indexOfLastPopularity )

  // Change page
  const parksPaginate = parkPageNumber => setCurrentParkPage( parkPageNumber )
  const popularityPaginate = popularityPageNumber => setCurrentPopularityPage( popularityPageNumber )

  if( APIStateValue !== '' ) {

    if ( loading ) {
      return <h2> Loading... </h2>;
    }

    return (
      <>
        { stateAPI.map( { currentParks }, park => {
          <ParksPerState key={ park } stateAPI={ currentParks } loading={ loading } />
        } )
          
        }
        
      </>
    )
  }

  if( APIPopularityValue !== '' ) {
    return (
      <>
        <ParkPerPopularity popularityAPI={ currentPopularity } />
        <ParkPerPopularityPagination popularityPerPage={ popularityPerPage } totalPopularity={ popularityAPI.length } paginate={ popularityPaginate } />
      </>
    )
  }
}

export default ParksAPIPage
