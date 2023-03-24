import { createContext, useContext, useMemo, useReducer } from "react";
import AppContextDefaultState from "./defaultState";
import AppContextReducer from "./reducer";

const AppContext = createContext<{ state: AppContextState; dispatch: any }>({
	state: AppContextDefaultState,
	dispatch: () => {},
});

export const AppContextProvider = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	const [state, dispatch] = useReducer(AppContextReducer, AppContextDefaultState);

	const value = useMemo(() => {
		return { state, dispatch };
	}, [state]);

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
