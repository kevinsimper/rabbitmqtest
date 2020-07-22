const amqplib = require("amqplib");
exports.connect = async (url) => {
  return await amqplib.connect(url);
};

exports.connectRetry = async (url, retry) => {
  const connection = await amqplib.connect(url);
  connection.on("error", () => {
    console.log("something");
  });
  return connection;
};
