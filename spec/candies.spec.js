describe("Candy Store inventory", function () {
  let candy;

  beforeEach(() => {
    candy = new Candies();
  });

  // Someone add candies
  describe("Add candies", function () {
    it("should add 500 skittles candy", function () {
      const bin = Candies.getBinContents();
      const candyType = "skittles";
      const candyQty = 500;

      candy.add(candyType, candyQty);

      expect(candyQty).toEqual(bin[candyType]);
    });

    it("should increase current amount of skittles by 300", function () {
      const bin = Candies.getBinContents();
      const candyType = "skittles";
      const candyQty = 300;
      const currentAmt = bin[candyType];

      candy.add(candyType, candyQty);

      expect(currentAmt + candyQty).toEqual(bin[candyType]);
    });
  });

  // Someone removes candies
  describe("Remove candies", function () {
    it("Should return [undefined] if caramel quantity is zero", function () {
      const bin = Candies.getBinContents();
      const candyType = "caramel";
      const candyQty = 20;

      const removed = candy.remove(candyType, candyQty);

      expect(removed).toBeUndefined();
    });

    it("should decrease skittles count by 250", function () {
      const bin = Candies.getBinContents();
      const candyType = "skittles";
      const candyQty = 250;
      const currentAmt = bin[candyType];

      candy.remove(candyType, candyQty);

      expect(currentAmt - candyQty).toEqual(bin[candyType]);
    });

    it("should remove only skittle candies", function () {
      const bin = Candies.getBinContents();
      const candyType = "skittles";
      const candyQty = 150;
      const currentAmt = bin["caramel"];

      candy.remove(candyType, candyQty);

      expect(bin["caramel"]).toEqual(currentAmt);
    });
  });
});
