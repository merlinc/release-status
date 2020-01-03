import React from "react";
import TestRenderer from "react-test-renderer";
import BreadCrumbs from "./bread-crumbs";

describe("Bread Crumbs", () => {
  it("should do something", () => {
    const testRenderer = TestRenderer.create(
      <BreadCrumbs org="orgName" project="projectName" />
    );
    const testInstance = testRenderer.root;

    expect(testInstance).toBeDefined();

    // expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
    // expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);
  });
});
