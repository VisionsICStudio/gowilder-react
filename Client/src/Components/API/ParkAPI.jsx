import axios from 'axios'

export const superData = {
  parksData: [],
  park: {
    id: '',
    url: '',
    fullName: '',
    parkCode: '',
    description: '',
    latitude: '',
    longitude: '',
    latLong: '',
    activities: [],
    topics: [],
    states: '',
    contacts: {},
    entranceFees: [],
    entrancePasses: [],
    fees: [],
    directionsInfo: '',
    directionsURL: '',
    operatingHours: [],
    addresses: [],
    images: [],
    weatherInfo: '',
    name: '',
    designation: '',
    isOpen: false
  },
  currentUser: '',
}

export const parksEP = '/parks'
export const activitiesParksEP = '/activities/parks'

export default axios.create({
  baseURL: `${process.env.REACT_APP_NP_API}`, 
  headers: {
    Authorization:
      `${process.env.REACT_APP_API_KEY}`
  }
})
