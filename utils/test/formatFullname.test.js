const formatFullname = require("../formatFullname");
const expect = require("chai").expect;
describe("FormatFullName", () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal("Error");
    expect(formatFullname(20)).to.equal("Error");
    expect(formatFullname({})).to.equal("Error");
    expect(formatFullname([])).to.equal("Error");
    expect(formatFullname(function () {})).to.equal("Error");
  });
  it('should return an error if "fullName" arg length is 0', () => {
    expect(formatFullname("")).to.equal("Error");
  });
  it('should return an error if "fullName" arg has only one arg or more than two args', () => {
    expect(formatFullname("john")).to.equal("Error");
    expect(formatFullname("john doe doe")).to.equal("Error");
  });
  it('should return good cut "fullName" if proper args', () => {
    expect(formatFullname("john doe")).to.equal("John Doe");
    expect(formatFullname("JOHN DOE")).to.equal("John Doe");
    expect(formatFullname("jOHn DoE")).to.equal("John Doe");
  });
});
