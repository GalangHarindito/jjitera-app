import React, { createContext, useReducer, Dispatch } from "react";
import { reducer } from "./reducers";

interface Props {
  children: React.ReactNode;
}

type InitialStateType = {
    user: any,
  };

const initialState = {
    user: [],
};

export const AppContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch<any>;
  }>({
    state: initialState,
    dispatch: () => null
  });

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>{children}</AppContext.Provider>
  );
};

