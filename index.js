const postcode = 'RH121EP';

const fetchData = (postcode) => {
    fetch(`https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`)
    .then(response => response.json())
    .then(data => {
        const firstTenResturants = data.restaurants.slice(0, 10);
        console.log(firstTenResturants);

        firstTenResturants.forEach(restaurant => {
            console.log('Name: ' + restaurant.name);
            restaurant.cuisines.slice(0, 2).forEach(cuisine => {
                console.log('Cuisine: ' + cuisine.name);
            });
            console.log('Rating: ' + restaurant.rating.starRating);
            console.log('Address: ' + restaurant.address.firstLine + ' ' + restaurant.address.postalCode);
            console.log('')

        });
        
        
    });
};

fetchData(postcode);