import { classNames } from "./classnames";

describe("classNames", () => {
  test("test", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
});
