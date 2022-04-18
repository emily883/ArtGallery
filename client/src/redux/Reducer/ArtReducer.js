import { GET_ALL_ARTS } from "../Types/index.js";

const initialState = {
  arts: [],
};

export default function ArtReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_ARTS:
      return {
        ...state,
        arts: action.payload,
      };
    default:
      return state;
  }
}
