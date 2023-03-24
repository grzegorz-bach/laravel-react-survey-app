import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import "./index.css";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<AppContextProvider>
			<RouterProvider router={router} />
		</AppContextProvider>
	</React.StrictMode>
);
