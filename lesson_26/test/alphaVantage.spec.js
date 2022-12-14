const { expect } = require('chai');
const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validator = new Validator();
const alphaVantageQuery = require('../testData/alphaVantageQuery.v1.json');

describe('Alpha Vantage API testing', () => {
    it('check status code', async () => {
        const response = await axios.get('https://alpha-vantage.p.rapidapi.com/query', {
            params: {
                interval: '5min',
                function: 'TIME_SERIES_INTRADAY',
                symbol: 'MSFT',
                datatype: 'json',
                output_size: 'compact'
            },
            headers: {
                'X-RapidAPI-Key': '20ad7066edmsh1e59bea68fc5e57p164d0fjsn0f75f0cc21f5',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
        })
        expect(response.status).to.equal(200);
    });

    it('check response body', async () => {
        const response = await axios.get('https://alpha-vantage.p.rapidapi.com/query', {
            params: {
                interval: '5min',
                function: 'TIME_SERIES_INTRADAY',
                symbol: 'MSFT',
                datatype: 'json',
                output_size: 'compact'
            },
            headers: {
                'X-RapidAPI-Key': '20ad7066edmsh1e59bea68fc5e57p164d0fjsn0f75f0cc21f5',
                'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
            }
        })

        const result = await validator.validate(response.data, alphaVantageQuery);
        expect(result.valid).to.equal(true);
    });

});