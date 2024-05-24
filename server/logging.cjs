const winston = require("winston");
const path = require("path");

const logPath = path.join(__dirname, "logs", "app.log");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "logs/server.log" })],
});

module.exports = logger;
