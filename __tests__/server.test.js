"user strict";

const { server } = require("../src/server.js");
//const supergoose = require("@code-fellows/supergoose"); // mock request engine
const supertest = require("supertest");
const mockRequest = supertest(server);
// this pulls in and configures and runs mongo memory server and supertest

const DataCollection = require("../src/models/data-collection-class.js");
//const food = new GenericCollection();
const FoodSchema = require("../src/models/food");
const food = new DataCollection(FoodSchema);

describe("Food Actions", () => {
  it("can create() a new food item", () => {
    let obj = { name: "test food 1", calories: 9999, type: "FRUIT" };
    let expected = { name: "test food 1", calories: 9999, type: "FRUIT" };

    return food.create(obj).then((record) => {
      // in general, review this technique for similar object comparison
      Object.keys(obj).forEach((item) => {
        console.log(record[item]);
        expect(record[item]).toEqual(expected[item]);
      });
    });
  });

  // create, then read so that this test is independent from above
  it("can read() a single food item", () => {
    let obj = { name: "test food 2", calories: 9999, type: "VEG" };
    let expected = { name: "test food 2", calories: 9999, type: "VEG" };
    return food.create(obj).then((record) => {
      return food.read(record._id).then((item) => {
        console.log("this should be test food 2", item);
      });
    });
  });
  // bad path
  it("should send response 404 when bad path is given", async () => {
    return mockRequest.get("/not-a-thing").then((data) => {
      expect(data.status).toBe(404);
    });
  });
  // bad method
  it("should send response 404 when bad method is given", async () => {
    return mockRequest.get("/badmethod").then((data) => {
      expect(data.status).toBe(404);
    });
  });

  it("need to be able to upate an item", async () => {
    let obj = { name: "test food 1", calories: 9999, type: "VEG" };
    let update_data = { name: "test food 2", calories: 3000, type: "FRUIT" };
    return food.create(obj).then((record) => {
      return food.update(record.id, update_data).then((item) => {
        console.log("created record", item);
        expect(item._id).toEqual(record._id);
        expect(item.name).toEqual("test food 2");
        expect(item.calories).toEqual(3000);
        expect(item.type).toEqual("FRUIT");
      });
    });
  });
});

/*describe("WEB SERVER", () => {
  it("should send 404 error on a bad route", () => {

  });

  it("should send 404 error on a bad method", () => {

  });
});*/
