import React, { Component } from 'react';
import './App.css';
import { DisplayAllCharacters } from './components/DisplayAllCharacters/DisplayAllCharacters';
import { ButtonComponent } from './components/ButtonComponent';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			starwarsChars: []
		};
	}

	componentDidMount() {
		this.getCharacters('https://swapi.co/api/people/');
	}

	getCharacters = URL => {
		// feel free to research what this code is doing.
		// At a high level we are calling an API to fetch some starwars data from the open web.
		// We then take that data and resolve it our state.
		fetch(URL)
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({ starwarsChars: data.results });
			})
			.catch(err => {
				throw new Error(err);
			});
	};

	render() {
		const { starwarsChars } = this.state;
		return (
			<React.Fragment>
				<header className="main-header">
					<div className="container">
						<h1 className="Header">React StarWars</h1>
					</div>
				</header>

				<main className="main">
					<div className="container">
						<DisplayAllCharacters starwarsChars={starwarsChars} />

						<ButtonComponent buttonText="Prev" getCharacters={this.getCharacters} className="btn prev" />

						<ButtonComponent buttonText="Next" getCharacters={this.getCharacters} className="btn next" />
					</div>
				</main>

				<footer className="footer">
					<p>&copy; 2019 by Yemi</p>
				</footer>
			</React.Fragment>
		);
	}
}

export default App;
