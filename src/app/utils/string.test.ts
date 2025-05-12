import { describe, expect, it } from "vitest";
import { slugify, stripHTML } from "./string";

describe("slugify", () => {
  it("should return a valid slug", () => {
    const showName = "The Powerpuff Girls";

    expect(slugify(showName)).toBe("the-powerpuff-girls");
  });

  it("should return a valid slug when the show name has a comma", () => {
    const showName = "Goede Tijden, Slechte Tijden";

    expect(slugify(showName)).toBe("goede-tijden-slechte-tijden");
  });

  it("should return a valid slug when the show name has an exclamation point", () => {
    const showName = "Hey Arnold!";

    expect(slugify(showName)).toBe("hey-arnold");
  });

  it("should return a valid slug when the show name has a question mark and elipsis", () => {
    const showName = "What If...?";

    expect(slugify(showName)).toBe("what-if");
  });
});

describe("stripHTML", () => {
  it("should return a plain text without any tags", () => {
    const text = "<p>Here is your <b><u>text</u></b></p>";

    expect(stripHTML(text)).toBe("Here is your text");
  });
});
