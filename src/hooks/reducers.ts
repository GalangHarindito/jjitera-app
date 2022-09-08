export interface Users {
  user: any;
}

export type Action = { type: "GET_USER"; payload: [] };

export function reducer(state: Users, action: Action): Users {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default reducer;
