const postcode = 'RH121EP';

const fetchData = (postcode) => {
    fetch(`https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`)
    .then(response => response.json())
    .then(data => {
        const firstTenResturants = data.restaurants.slice(0, 10);
        console.log(firstTenResturants);

        const mainContainer = document.querySelector('.main-container');;

        firstTenResturants.forEach(restaurant => {
            const restaurantDiv = document.createElement('div');
            restaurantDiv.classList.add('restaurant');

            const nameElement = document.createElement('p');
            nameElement.textContent = 'Name: ' + restaurant.name;
            restaurantDiv.appendChild(nameElement);

            const cuisinesElement = document.createElement('p');
            cuisinesElement.textContent = 'Cuisine: ' + restaurant.cuisines.slice(0, 2).map(cuisine => cuisine.name).join(', ');
            restaurantDiv.appendChild(cuisinesElement);

            const ratingElement = document.createElement('p');
            ratingElement.textContent = 'Rating: ' + restaurant.rating.starRating;
            restaurantDiv.appendChild(ratingElement);

            const addressElement = document.createElement('p');
            addressElement.textContent = 'Address: ' + restaurant.address.firstLine + ' ' + restaurant.address.postalCode;
            restaurantDiv.appendChild(addressElement);

            mainContainer.appendChild(restaurantDiv);
        }); 
    });
};


fetchData(postcode);