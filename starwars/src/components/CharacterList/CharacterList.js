import React from 'react';

export const CharacterList = props => {
	const { name, gender, height, birth_year, hair_color, eye_color, skin_color, mass, created, edited } = props;

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
				<li>{skin_color}</li>
				<li>{mass}</li>
			</ul>
			<footer>
				<p>{created}</p>
				<p>{edited}</p>
			</footer>
		</div>
	);
};
