import React from 'react';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import './DisplayButtons.css';

export const DisplayButtons = props => {
	const { previous, next, getCharacters } = props;

	return (
		<div className="button-container">
			<ButtonComponent
				buttonText="Prev"
				className="btn prev"
				handleClick={() => {
					if (previous !== null) {
						getCharacters(previous);
					}
				}}
				previous={previous}
			/>

			<ButtonComponent
				buttonText="Next"
				className="btn next"
				handleClick={() => {
					if (next !== null) {
						getCharacters(next);
					}
				}}
			/>
		</div>
	);
};
