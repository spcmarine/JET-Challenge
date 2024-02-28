const postcode = 'RH121EP'

const fetchData = (postcode) => {
    fetch(`https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`)
    .then(response => response.json())
    .then(data => {
        const firstTenResturants = data.restaurants.slice(0, 10)
        console.log(firstTenResturants)

        firstTenResturants.forEach(restaurant => {
            // console.log(restaurant.name)
            restaurant.cuisines.slice(0, 2).forEach(cuisine => {
                console.log(cuisine.name)
            })
            console.log(restaurant.rating.starRating)
            console.log(restaurant.address.firstLine + ' ' + restaurant.address.postalCode)


        });
        
        
    })
}

fetchData(postcode)