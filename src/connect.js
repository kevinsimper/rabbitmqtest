const amqplib = require("amqplib");
exports.connect = async (url) => {
  return amqplib.connect(url);
};
