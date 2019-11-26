import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<Link
							style={{ backgroundColor: "#E9967A" }}
							to="/"
							className="navbar-brand"
						>
							ToDo List
						</Link>
						<div className="collpase nav-collapse">
							<ul className="navbar-nav mr-auto">
								<li className="navbar-item">
									<Link
										style={{ backgroundColor: "#E9967A" }}
										to="/"
										className="nav-link"
									>
										Список дел
									</Link>
								</li>
								<li className="navbar-item">
									<Link
										style={{ backgroundColor: "#E9967A" }}
										to="/create"
										className="nav-link"
									>
										Создать новое дело
									</Link>
								</li>
							</ul>
						</div>
					</nav>

					<Route path="/" exact component={TodosList} />
					<Route path="/edit/:id" component={EditTodo} />
					<Route path="/create" component={CreateTodo} />
				</div>
			</Router>
		);
	}
}

export default App;
