const { fetchData} = require('./index.js');

describe('Tests that data is retrieved', () => {
    it('makes an scucessful api call returning data and a sucessfull status', () => {
        const postcode = 'RH121EP';
        return fetchData(postcode).then(data => {
            expect(data).toToBeDefined();
            expect(data.status).toBe(200);
        })
    })
})