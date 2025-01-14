const invoices = require("../data/invoices");
const plan = require("../data/plan");
const spendTargetReport = require("../src/spendTargetReport");

const expected = [
  {
    category: "Core Supports",
    categorySpend: 1380,
    code: 1,
    initialBudget: 4800,
    remainingBudget: 3420,
    target: "OVERSPEND",
  },
  {
    category: "Home Care",
    categorySpend: 618,
    code: 3,
    initialBudget: 2400,
    remainingBudget: 1782,
    target: "ON_TRACK",
  },
  {
    category: "transport",
    categorySpend: 312,
    code: 15,
    initialBudget: 1560,
    remainingBudget: 1248,
    target: "UNDERSPEND",
  },
];

test.skip("spend target report", () => {
  expect(spendTargetReport(plan, invoices)).toStrictEqual(expected);
});
