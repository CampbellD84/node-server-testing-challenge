const db = require("../data/dbConfig");
const Supplies = require("./supplies-model");

describe("supplies model", () => {
  describe("insert()", () => {
    beforeEach(async () => {
      await db("schoolsupplies").truncate();
    });

    it("should insert a school supply", async () => {
      await Supplies.insert({
        name: "glue",
        description: "chemical to adhere things to each other",
        quantity: 1
      });

      const supply = await db("schoolsupplies");
      expect(supply).toHaveLength(1);
    });

    describe("remove()", () => {
      it("should remove a school supply", async () => {
        await Supplies.remove({ id: 1 });
        const supplies = await db("schoolsupplies");
        expect(supplies).not.toContain({
          name: "pencils",
          description: "writing utensils you can fix mistakes with",
          quantity: 24
        });
      });
    });
  });
});
