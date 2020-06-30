jest.mock("amqplib");
const amqplib = require("amqplib");
const { connect } = require("./connect");

test("amqplib connect", async () => {
  amqplib.connect.mockResolvedValueOnce({});
  const connection = await connect("amqp://localhost");
  expect(connection).toBeDefined();
  expect(amqplib.connect).toHaveBeenCalled();
});
