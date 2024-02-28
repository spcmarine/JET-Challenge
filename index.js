const postcode = 'RH121EP'

const fetchData = (postcode) => {
    fetch(`https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data.restaurants)
        const firstTenResturants = data.restaurants.slice(0, 10)
        console.log(firstTenResturants)
        
    })
}

fetchData(postcode)