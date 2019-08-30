const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  //   it("should set environment to testing", () => {
  //     expect(process.env.DB_ENV).toBe("testing");
  //   });

  describe("GET /", () => {
    it("should return 200 OK", async () => {
      const res = await request(server).get("/supplies");

      expect(res.status).toBe(200);
    });

    it("contains the right data types", async () => {
      const res = await request(server).get("/supplies");
      expect.objectContaining({
        name: expect.any(String),
        description: expect.any(String),
        quantity: expect.any(Number)
      });
    });
  });

  describe("DELETE /", () => {
    it("should return 201 Created", async () => {
      const res = await request(server).delete("/3");
      expect(res.status).toBe(201);
    });

    it("should return message JSON", async () => {
      const res = await request(server).delete("/2");
      expect(res.type).toBe("application/json");
    });
  });
});
