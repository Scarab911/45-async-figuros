const crypto = require('crypto');
const config = require('../config');

const helpers = {};

helpers.parseJsonToObject = str => {
    try {
        const obj = JSON.parse(str);
        return obj;
    } catch (e) {
        return {};
    }
}

helpers.hash = str => {
    if (typeof str === 'string' && str !== '') {
        return crypto.createHmac('sha256', config.hashingSecret).update(str).digest('hex');
    } else {
        return false;
    }
}

module.exports = helpers;