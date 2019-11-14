import React from "react";
import Search from "../component/Search";
import ShowCard from "../component/ShowCard";
import preLoad from "../../data.json";
import { shallow } from "enzyme";

test("search render correctly", () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test("search should render correct amount of shows based on search term", () => {
  const searchWord = "black";
  const component = shallow(<Search />);
  component.find("input").simulate("change", { target: { value: searchWord } });
  const showCount = preLoad.shows.filter(
    show =>
      `${show.title}${show.description}`
        .toUpperCase()
        .indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});

test("search should reander correct number of shows ", () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preLoad.shows.length);
});
