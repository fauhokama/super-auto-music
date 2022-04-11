import { FC } from 'react';
import { Creature } from '@prisma/client';

const ElCreature: FC<Creature> = ({ instrument, attack, health }) => {
	return (
		<div>
			<h1> {instrument} </h1>
			<p> Attack: {attack} </p>
			<p> Health: {health} </p>
		</div>
	);
};

export default ElCreature;
