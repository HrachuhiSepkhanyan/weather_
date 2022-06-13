import { createStore } from "redux";
import { API_URL, API_KEY } from "../API/API";
const store = createStore(
  function (state: any, action: any) {
    if (action.type === "change-Data") {
      return {
        ...state,
        data: {
          name: action.payload.name,
        },
      };
    }
    return state;
  },
  {
    data: {
      name: "Hrachuhi",
    },
  }
);

export default store;
