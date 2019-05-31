import React from 'react';

export const ButtonComponent = props => {
	const { buttonText, className, handleClick } = props;

	return (
		<button className={className} type="button" onClick={handleClick}>
			{buttonText}
		</button>
	);
};
