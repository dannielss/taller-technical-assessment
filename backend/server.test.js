const request = require("supertest");
const app = require("./app");

describe("transactions", () => {
  it("should save a transaction", () => {
    request(app)
      .post("/transaction")
      .send({ description: "Test", amount: 123 })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, {
        description: "Test",
        amount: 123,
      });
  });
});
