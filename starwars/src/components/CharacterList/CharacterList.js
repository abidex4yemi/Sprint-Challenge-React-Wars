import React from 'react';
import './CharacterList.css';

export const CharacterList = props => {
	const { name, gender, height, birth_year, hair_color, eye_color, created, edited } = props;

	return (
		<div className="single-char-list-container">
			<header>
				<h2>{name}</h2>
			</header>
			<ul>
				<li>{gender}</li>
				<li>{height}</li>
				<li>{birth_year}</li>
				<li>{hair_color}</li>
				<li>{eye_color}</li>
			</ul>
			<footer>
				<p>{created}</p>
				<p>{edited}</p>
			</footer>
		</div>
	);
};
