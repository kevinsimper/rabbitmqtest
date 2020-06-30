jest.mock("amqplib");
const amqplib = require("amqplib");
const { connect, connectRetry } = require("./connect");

test("amqplib connect", async () => {
  amqplib.connect.mockResolvedValueOnce({});
  const connection = await connect("amqp://localhost");
  expect(connection).toBeDefined();
  expect(amqplib.connect).toHaveBeenCalled();
});

test("amqplib makes an error", async () => {
  let events = {};
  const on = jest.fn((name, callback) => {
    events[name] = callback;
  });
  amqplib.connect.mockResolvedValueOnce({
    on,
  });
  const connection = await connectRetry("amqp://localhost", 5);
  expect(on).toHaveBeenCalled();
  expect(events.error).toBeInstanceOf(Function);
});
