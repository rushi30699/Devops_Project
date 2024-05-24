// import winston from "winston/lib/winston/config";
import winston from "../node_modules/winston";
const path = require("path");

const logPath = path.join(__dirname, "logs", "app.log");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "logs/server.log" })],
});

module.exports = logger;
