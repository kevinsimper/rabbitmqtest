const amqplib = require("amqplib");
exports.connect = async (url) => {
  return await amqplib.connect(url);
};

exports.connectRetry = async (url, retry, call) => {
  let called = 0;
  async function con() {
    const connection = await amqplib.connect(url).catch(() => {
      return con();
    });
    connection.on("error", () => {
      console.log("something");
      called++;
    });
    return connection;
  }
  return await con();
};
