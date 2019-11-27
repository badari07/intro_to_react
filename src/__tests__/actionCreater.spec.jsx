// @flow

import moxios from "moxios";
import { setSearchTerm, addApiData } from ".././action/actionCreaters";
import getApiDetails from ".././action/asyncAction";

const strangerThings = {
  title: "Billions",
  year: "2016–",
  description:
    'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
  poster: "b.jpg",
  imdbID: "tt4270492",
  trailer: "_raEUMLL-ZI",
  rating: "8.6"
};

test("setSearchTerm", () => {
  expect(setSearchTerm("New York")).toMatchSnapshot();
});

test("addApiData", () => {
  expect(addApiData(strangerThings)).toMatchSnapshot();
});

test("getApiDetails", (done: Function) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getApiDetails(strangerThings.imbdID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: strangerThings
        })
        .then(() => {
          expect(request.url).toEqual(
            `http://localhost:3000/${strangerThings.imdbID}`
          );
          expect(dispatchMock).toBeCalledWith(addApiData(strangerThings));
          done();
        });
    });
  });
});
