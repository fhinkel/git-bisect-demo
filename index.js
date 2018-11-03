// This function encapsulates obsure domain
// logic. At this point, it is unclear why
// it does what it does. But there are numerous
// test asserting its correctness.
let logic = (a, b) => {
	return Math.abs(a + b);
};

module.exports = logic;