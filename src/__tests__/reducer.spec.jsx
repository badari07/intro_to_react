// @flow

import rootReducers from ".././reducers/rootReducers";

test("SET_SEARCH_TERM", () => {
  const state = rootReducers(
    { searchTerm: "", apiData: {} },
    { type: "SET_SEARCH_TERM", payload: "black" }
  );
  expect(state).toEqual({ searchTerm: "black", apiData: {} });
});

test("ADD_API_DATE", () => {
  const state = rootReducers(
    { searchTerm: "", apiData: {} },
    {
      type: "ADD_API_DATE",
      payload: {
        rating: "6.4",
        title: "Westworld",
        year: "2016–",
        description:
          "Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.",
        poster: "ww.jpg",
        imdbID: "tt0475784",
        trailer: "eX3u0IlBBO4"
      }
    }
  );
  expect(state).toEqual({
    searchTerm: "",
    apiData: {
      tt0475784: {
        rating: "6.4",
        title: "Westworld",
        year: "2016–",
        description:
          "Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite, no matter how noble or depraved, can be indulged without consequence.",
        poster: "ww.jpg",
        imdbID: "tt0475784",
        trailer: "eX3u0IlBBO4"
      }
    }
  });
});
