import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("Test case for <App /> component", () => {
  let shallowWrapper;
  let instance;

  beforeEach(() => {
    shallowWrapper = shallow(<App />);
    instance = shallowWrapper.instance();
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render the App component", () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it("should set state when handleOnchange is called", () => {
    const event = {
      target: {
        value: 30
      }
    };
    instance.handleOnChange(event);
    const state = shallowWrapper.state();

    expect(state.inputValue).toEqual(30);
  });

  it("should set error when input value is greater than 10000 or less than 1", () => {
    const event = {
      preventDefault: () => {}
    };

    let state;

    shallowWrapper.setState({ inputValue: -2 });
    instance.handleGeneratePhoneNumbers(event);
    state = shallowWrapper.state();

    expect(state.inputValue).toEqual(-2);
    expect(state.error).toEqual(
      "enter a number less than 10,000 but greater than 0"
    );

    shallowWrapper.setState({ inputValue: 30000 });
    instance.handleGeneratePhoneNumbers(event);
    state = shallowWrapper.state();

    expect(state.inputValue).toEqual(30000);
    expect(state.error).toEqual(
      "enter a number less than 10,000 but greater than 0"
    );
  });

  it("should generate phone numbers when input value passes validation", () => {
    const event = {
      preventDefault: () => {}
    };
    shallowWrapper.setState({ inputValue: 5 });
    instance.handleGeneratePhoneNumbers(event);
    const state = shallowWrapper.state();

    expect(state.inputValue).toEqual("");
    expect(state.error).toBe("");
    expect(state.phoneNumbers.length).toBe(5);
  });

  it("should call handlePhoneNumberSort when sort value changes", () => {
    const event = {
      preventDefault: () => {},
      target: {
        value: "desc"
      }
    };
    let state;

    const handlePhoneNumberSortSpy = jest.spyOn(instance, "handlePhoneNumberSort")

    shallowWrapper.setState({ phoneNumbers: ["09974736943", "0786756476"] });
    instance.handleSortChange(event);
    state = shallowWrapper.state();
    expect(state.sortValue).toEqual("desc");
    expect(handlePhoneNumberSortSpy).toHaveBeenCalled()

    instance.handleSortChange({
      ...event,
      target: {
        value: "asc"
      }
    });
    state = shallowWrapper.state();
    expect(state.sortValue).toEqual("asc");
  });
});
