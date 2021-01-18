const request = require("supertest")("http://localhost:3001");
const expect = require("chai").expect;

describe("GET /users", function () {
  it("returns all users", async function () {
    const response = await request.get("/users");
    console.log(response)
    expect(response.status).to.eql(200);
    //expect(response.body).to.eql(83);
  });
});