import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://example.com',
    headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'example.com',
        'x-rapidapi-key': process.env.RAPIDAPI_key
    }
});

function getData() {
    instance({
        'method': 'GET',
        'url': '/query',
        'params': {
            'search': 'parameter'
        }
    },
    function (data) {
        console.log('Transforming data...');
        const json = JSON.parse(data);
        const dates = Object.keys(json['nested objects']);

        data = {dates};
        return data;
    }
    )
}

function postData() {
    instance({
        'method': 'POST',
        'url': '/api',
        'data': {
            'item1': 'data1',
            'item2': 'item2'
        },
        'headers': {
            'content-type': 'application/json'
        }
    })
}

export default ( getData, postData) ;