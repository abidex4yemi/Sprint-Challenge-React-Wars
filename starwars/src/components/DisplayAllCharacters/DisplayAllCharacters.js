import React from 'react';
import uuid from 'uuid';
import { CharacterList } from '../CharacterList/CharacterList';

export const DisplayAllCharacters = props => {
	const { starwarsChars } = props;
	return (
		<section className="all-characters">
			{starwarsChars.map(character => {
				const {
					name,
					gender,
					height,
					birth_year,
					hair_color,
					eye_color,
					skin_color,
					mass,
					created,
					edited
				} = character;
				return (
					<CharacterList
						key={uuid()}
						name={name}
						gender={gender}
						height={height}
						birth_year={birth_year}
						hair_color={hair_color}
						eye_color={eye_color}
						skin_color={skin_color}
						mass={mass}
						created={created}
						edited={edited}
					/>
				);
			})}
		</section>
	);
};
