const { expect } = require('chai');
const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validator = new Validator();
const loveCalculator = require('../testData/loveCalculatorQuery.v1.json');


describe('Love Calculator API testing', () => {

    it('check status code', async () => {
        const response = await axios.get('https://love-calculator.p.rapidapi.com/getPercentage', {
            params: {sname: 'Alice', fname: 'John'},
            headers: {
                'X-RapidAPI-Key': '20ad7066edmsh1e59bea68fc5e57p164d0fjsn0f75f0cc21f5',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
        })
        expect(await response.status).to.equal(200);
    });

    it('check response body', async () => {
        const response = await axios.get('https://love-calculator.p.rapidapi.com/getPercentage', {
            params: {sname: 'Alice', fname: 'John'},
            headers: {
                'X-RapidAPI-Key': '20ad7066edmsh1e59bea68fc5e57p164d0fjsn0f75f0cc21f5',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
        })

        const result = await validator.validate(response.data, loveCalculator);
        expect(await result.valid).to.equal(true);
    });

});