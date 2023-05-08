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
    if (typeof candyQty !== "number") {
      throw new Error("invalid operation");
    }

    bin[candyType] += candyQty;
  };

  /**
   * Remove candy
   * @param {'skittles' | 'caramel'} candyType
   * @param {number} candyQty
   */
  ctr.prototype.remove = function (candyType, candyQty) {
    if (typeof candyQty !== "number") {
      throw new Error("invalid operation");
    }

    if (bin[candyType] < 1) return undefined;

    bin[candyType] -= candyQty;
  };

  return ctr;
})();
