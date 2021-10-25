const { createLogger, format, transports } = require("winston");
const moment = require("moment");
require("winston-mongodb");

module.exports = createLogger({
  transports: [
    new transports.File({
      filename: `logs/logs-${moment().format("MM-DD-YYYY")}/error.log`,
      level: "error",
      json: true,
      format: format.combine(
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        format.json(),
      ),
    }),
    new transports.File({
      filename: `logs/logs-${moment().format("MM-DD-YYYY")}/warn.log`,
      level: "warn",
      json: true,
      format: format.combine(
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        format.json(),
      ),
    }),
    new transports.File({
      filename: `logs/logs-${moment().format("MM-DD-YYYY")}/debug.log`,
      level: "debug",
      json: true,
      format: format.combine(
        format.timestamp({ format: "MMM-DD-YYYY HH:mm:ss" }),
        format.json()
      ),
    }),
    new transports.MongoDB({
      level: "debug",
      db: "mongodb://localhost:27017/logs",
      options: {
        useUnifiedTopology: true,
      },
      collection: "server_logs",
      format: format.combine(
        format.timestamp(),
        format.json()
      ),
    }),
  ],
  exitOnError: false,
});
