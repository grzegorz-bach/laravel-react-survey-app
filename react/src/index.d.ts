interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
}

interface AppContextState {
	user: User | null;
}

type AppContextReducerActionType = "SET_USER" | "CLEAR_USER";
