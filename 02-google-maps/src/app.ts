import axios from 'axios'

const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement

const GOOGLE_API_KEY = 'AIzaSyCghBAvPMF_rASLPubYJte0EOIQF7fTJGM'

type GoogleGeocodingResponse = {
  results: {
    geometry: {
      location: { lat: number, lng: number }
    }
  }[]
  status: 'OK' | 'ZERO_RESULTS' | 'INVALID_REQUEST'
}

function searchAddressHandler(event: Event) {
  event.preventDefault()
  const enteredAddress = addressInput.value

  axios.get<GoogleGeocodingResponse>(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`
  ).then(response => {
    console.log(response)
    if (response.data.status !== 'OK') {
      throw new Error('Could not fetch location')
    }

    // The location (including longitude and latitude) of the entered address
    const coordinates = response.data.results[0].geometry.location

    // The map, centered at 'coordinates'
    const map = new google.maps.Map(document.getElementById('map')!, {
      center: coordinates,
      zoom: 16
    })

    // The marker, positioned at 'coordinates'
    new google.maps.Marker({
      position: coordinates,
      map: map,
    })
  }).catch(err => {
    alert(err.message)
    console.log(err)
  })
}

form.addEventListener('submit', searchAddressHandler)

/**
 * Note: For more information about how to use Google Maps APIs in
 * TypeScript code, see
 * https://developers.google.com/maps/documentation/javascript/using-typescript?hl=en_US
 */
