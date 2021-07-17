const STEP = 2;

const pagination = {
  limit: STEP,
  offset: 0,
  getParams(pageNumber = 1) {
    this.limit = STEP * pageNumber;
    this.offset = this.limit - STEP;
    return {
      limit: this.limit,
      offset: this.offset,
    };
  },
};

module.exports = { pagination };
