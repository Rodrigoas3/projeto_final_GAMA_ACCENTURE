import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login";
import Painel from "./painel";

const Pages = () => (
	<Switch>
		<Route path="/" exact>
			<Login />
		</Route>
		<Route path="/painel" exact>
			<Painel />
		</Route>
	</Switch>
);

export default Pages;
