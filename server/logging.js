import winston from "winston";
import path from "path";

const logPath = path.join(__dirname, "logs", "app.log");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "logs/server.log" })],
});

export default logger;
