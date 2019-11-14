import React from "react";
import Search from "../component/Search";
import { shallow } from "enzyme";

test("search render correctly", () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});
