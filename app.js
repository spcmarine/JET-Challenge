const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/restaurants/:postcode', (req, res) => {
    const { postcode } = req.params; 
    
    fetch(`https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        }
        return response.json();
    })
    .then(data => {
        res.json(data); 
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data from the API');
    });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
