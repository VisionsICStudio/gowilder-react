import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { NPAPIStyle } from '../../Styles/UI/NPAPI.Styles'

export const NPAPI = () => {

  const [parks, setParks] = useState([])
  const [value, setValue] = useState('pa')

  const apiString = 'https://developer.nps.gov/api/v1/parks?parkCode=' + value + '&api_key=qxk4vLHEmNpbSbhNjQNNcIaPoCTmi0MAZ5DQC0Is' 
 
  useEffect(() => {
    
    setValue('yell')
    axios.get(apiString)
    .then(res => { 
        console.log(res)
        setParks(res.data.data)
     })
     .catch(err => {
       console.log(err)
     })
  },[apiString] )

  return (
    <>
      <ul>
        {parks.map(({states, fullName}, park) => (
          <li style={ NPAPIStyle } key={park}> States: {states} | Park Name: {fullName}</li>
        ))}
      </ul>
    </>
  )
}

export default NPAPI
