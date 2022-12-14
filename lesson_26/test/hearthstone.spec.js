const { expect } = require('chai');
const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validator = new Validator();
const hearthstone = require('../testData/hearthstoneQuery.v1.json');

describe('Hearthstone API testing', () => {

    it('check status code', async () => {
        const response = await axios.get('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', {
            headers: {
                'X-RapidAPI-Key': '20ad7066edmsh1e59bea68fc5e57p164d0fjsn0f75f0cc21f5',
                'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
            }
        })
        expect(await response.status).to.equal(200);
    });

    it('check response body', async () => {
        const response = await axios.get('https://omgvamp-hearthstone-v1.p.rapidapi.com/info', {
            headers: {
                'X-RapidAPI-Key': '20ad7066edmsh1e59bea68fc5e57p164d0fjsn0f75f0cc21f5',
                'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
            }
        })
        const result = await validator.validate(response.data, hearthstone);
        expect(await result.valid).to.equal(true);
    });

});