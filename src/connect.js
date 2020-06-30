const amqplib = require("amqplib");
exports.connect = async (url) => {
  return await amqplib.connect(url);
};
