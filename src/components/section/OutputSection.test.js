import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OutputSection from "./OutputSection";

configure({ adapter: new Adapter() });

describe("Test case for <OutputSection /> component", () => {
  let shallowWrapper;
  const phoneNumbers = ["0876865756", "0876564365"];
  const props = {
    phoneNumbers
  };
  beforeEach(() => {
    shallowWrapper = shallow(<OutputSection {...props} />);
  });

  it("should render the OutputSection component", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it("should display generated numbers", () => {
    global.URL.createObjectURL = jest.fn();
    shallowWrapper.find(".yea").simulate("click");

    expect(shallowWrapper).toMatchSnapshot();
  });
});
