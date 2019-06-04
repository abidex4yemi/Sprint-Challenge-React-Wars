import React from 'react';
import { ButtonComponent } from '../ButtonComponent/ButtonComponent';
import './DisplayButtons.css';

export const DisplayButtons = props => {
	const { previous, next, getCharacters, hidden } = props;

	const togglegePrev = previous === null ? hidden : '';
	const toggleNext = next === null ? hidden : '';

	return (
		<div className="button-container">
			<ButtonComponent
				buttonText="Prev"
				className={`btn prev ${togglegePrev}`}
				handleClick={() => {
					if (previous !== null) {
						getCharacters(previous);
						window.scrollTo(0, 0);
					}
				}}
				previous={previous}
			/>

			<ButtonComponent
				buttonText="Next"
				className={`btn next ${toggleNext}`}
				handleClick={() => {
					if (next !== null) {
						getCharacters(next);
						window.scrollTo(0, 0);
					}
				}}
			/>
		</div>
	);
};
