// write your object here
const counter = {
  current: 0,
  inc: function () {
    this.current += 1;
    return this.current;
  },
};
