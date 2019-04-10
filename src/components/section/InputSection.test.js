import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import InputSection from "./InputSection";

configure({ adapter: new Adapter() });

describe("Test case for <InputSection /> component", () => {
  const props = {
    handleChange: jest.fn(),
    inputValue: "",
    error: "",
    generatePhoneNumbers: jest.fn(),
    handleSortChange: jest.fn()
  };

  it("should render the InputSection component", () => {
    const shallowWrapper = shallow(<InputSection {...props} />);
    expect(shallowWrapper).toMatchSnapshot();
  });

  it("should show error div component when an error is triggered", () => {
    const newProps = {
      ...props,
      error: "An error occurred"
    };
    const shallowWrapper = shallow(<InputSection {...newProps} />);
    expect(shallowWrapper.find('ErrorDiv')).toBeTruthy();
  });
});
