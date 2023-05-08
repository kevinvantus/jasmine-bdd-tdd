const Candies = (function () {
  bin = {
    skittles: 0,
    caramel: 0,
  };

  const ctr = function () {};

  ctr.printBin = function () {
    console.log(bin);
  };

  /**
   * @returns {{ skittles, caramel}}
   */
  ctr.getBinContents = function () {
    return bin;
  };

  /**
   * Add candy
   * @param {'skittles' | 'caramel'} candyType
   * @param {number} candyQty
   */
  ctr.prototype.add = function (candyType, candyQty) {
    bin[candyType] += candyQty;
  };

  /**
   * Remove candy
   * @param {'skittles' | 'caramel'} candyType
   * @param {number} candyQty
   */
  ctr.prototype.remove = function (candyType, candyQty) {
    if (bin[candyType] < 1) return undefined;

    bin[candyType] -= candyQty;
  };

  return ctr;
})();

// const candy = new Candies();
// const candy2 = new Candies();

// console.log(Candies.printBin());

// candy.add("skittles", 500);
// candy.add("caramel", 300);
// candy.add("caramel", 300);
// candy.remove("skittles", 30);

// console.log(Candies.printBin());
