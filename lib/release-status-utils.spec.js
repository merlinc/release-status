import releaseStatusUtils from "./release-status-utils";

describe("release-status-utils", () => {
  describe("name", () => {
    it("should return HEAD", () => {
      const name = releaseStatusUtils.name("HEAD");

      expect(name).toBe("HEAD");
    });

    it("should return ⚙ HASH", () => {
      const name = releaseStatusUtils.name("09DABCDE");

      expect(name).toBe("⚙ 09DABCDE");
    });
  });
});
