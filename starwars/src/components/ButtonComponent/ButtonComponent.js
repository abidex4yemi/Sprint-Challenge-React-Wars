import React from 'react';

export const ButtonComponent = props => {
	const { buttonText, getCharacters, className } = props;

	return (
		<button className={className} type="button" onClick={getCharacters}>
			{buttonText}
		</button>
	);
};
