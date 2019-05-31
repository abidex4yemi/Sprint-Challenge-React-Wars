import React from 'react';
import { CharacterList } from '../CharacterList/CharacterList';

export const DisplayAllCharacters = props => {
	return (
		<section className="all-characters">
			<CharacterList />
		</section>
	);
};
