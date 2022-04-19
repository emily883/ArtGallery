import { GET_ALL_ARTS, GET_ONE_ART } from "../Types/index.js";

const initialState = {
  arts: [],
  getArt: [],
};

export default function ArtReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ARTS:
      return {
        ...state,
        arts: action.payload,
      };
    case GET_ONE_ART:
      return {
        ...state,
        getArt: action.payload,
      };
    default:
      return state;
  }
}
