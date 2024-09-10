const { getAge } = require('./get.age.plugin');
const { getUUID } = require('./uuid.plugin');

const { http } = require('../plugins/http-client.plugin');
const buildLogger = require('../plugins/logger.plugin')

module.exports = {
    getAge,
    getUUID,
    http,
    buildLogger
}