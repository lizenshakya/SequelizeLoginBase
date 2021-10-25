const { createLogger, format, transports } = require('winston');
const moment = require("moment");

module.exports = createLogger({
transports:
    new transports.File({
    filename: `logs/logs-${moment().format("MM-DD-YYYY")}/server.log`,
    format:format.combine(
        format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
        format.align(),
        format.printf(info => `level: ${info.level}: timestamp: ${[info.timestamp]}: debugId: ${info.debugId} : message: ${info.message}`),
    )}),
});