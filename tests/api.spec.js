/* eslint-disable */
require("dotenv").config();

("use strict");

const app = require("./../app");
const supertest = require("supertest");
const { expect } = require("chai");

const request = supertest(app);

const URI = "mongodb://127.0.0.1:27017/react-blogging-database";

const database = require("./../server/database");

const data = {};

describe("Blogging API Tests", () => {
  before(() => {
    return database.connect(URI);
  });

  it("should sign up", () => {
    return request
      .post("/api/authentication/sign-up")
      .send({
        email: Math.floor(Math.random() * 10000) + "@gmail.com",
        name: "Jose Carneiro",
        password: "abcde1234567"
      })
      .expect(200)
      .then(response => {
        data.cookies = response.headers["set-cookie"];
        const body = response.body;
        // expect(body.type).to.equal("success");
        // expect(body.data).to.have.property("posts");
      });
  });

  it("should sign up", () => {
    return request
      .get("/api/authentication/verify")
      .set("Cookie", data.cookies)
      .expect(200)
      .then(response => {
        const body = response.body;
        // expect(body.type).to.equal("success");
        // expect(body.data).to.have.property("posts");
      });
  });

  it("should create new post", () => {
    return request
      .post("/api/post/create")
      .send({
        title: "New Post",
        body: "This is the post body"
      })
      .set("Cookie", data.cookies)
      .expect(200)
      .then(response => {
        const body = response.body;
        data.id = body.data.post._id;
        // expect(body.type).to.equal("success");
        // expect(body.data).to.have.property("posts");
      });
  });

  it("should load post", () => {
    return request
      .get(`/api/post/${data.id}`)
      .expect(200)
      .then(response => {
        const body = response.body;
        console.log(body);
        // expect(body.type).to.equal("success");
        // expect(body.data).to.have.property("posts");
      });
  });
});
