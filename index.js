const postcode = 'RH121EP';

const fetchData = (postcode) => {
    fetch(`http://localhost:3000/restaurants/${postcode}`)
    .then(response => response.json())
    .then(data => {
        const firstTenResturants = data.restaurants.slice(0, 10);

        const mainContainer = document.querySelector('.main-container');

        firstTenResturants.forEach(restaurant => {
            const restaurantDiv = document.createElement('div');
            restaurantDiv.classList.add('restaurant');

            const nameElement = document.createElement('p');
            console.log(restaurant.name)
            nameElement.classList.add('name');
            nameElement.textContent = 'Name: ' + restaurant.name;
            restaurantDiv.appendChild(nameElement);


            const cuisinesElement = document.createElement('p');
            cuisinesElement.classList.add('cuisine');
            cuisinesElement.textContent = 'Cuisine: ' + restaurant.cuisines.slice(0, 2).map(cuisine => cuisine.name).join(', ');
            restaurantDiv.appendChild(cuisinesElement);

            const ratingElement = document.createElement('p');
            ratingElement.classList.add('rating');
            ratingElement.textContent = 'Rating: ' + restaurant.rating.starRating;
            restaurantDiv.appendChild(ratingElement);

            const addressElement = document.createElement('p');
            addressElement.classList.add('address');
            addressElement.textContent = 'Address: ' + restaurant.address.firstLine + ' ' + restaurant.address.postalCode;
            restaurantDiv.appendChild(addressElement);

            mainContainer.appendChild(restaurantDiv);
        }); 
    });
};


fetchData(postcode);