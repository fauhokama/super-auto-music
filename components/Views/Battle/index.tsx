import { Team } from '@prisma/client';
import { FC } from 'react';
import useSWR from 'swr';
import ElCreature from '../../ElCreature';

const BattleView: FC = () => {
	const fetcher = (url: string): Promise<Team> => fetch(url).then(res => res.json());
	// const { data: playerTeam, error: playerError } = useSWR('/api/getteam', fetcher);
	// const { data: enemyTeam, error: enemyError } = useSWR('/api/getteam?skip=true', fetcher);

	// if (playerError) return <div>An error occured.</div>;
	// if (!playerTeam) return <div>Loading ...</div>;

	// if (enemyError) return <div>An error occured.</div>;
	// if (!enemyTeam) return <div>Loading ...</div>;

	const battle = {
		teams: {
			initialPlayerTeam: {
				creatures: [
					{ instrument: 'DRUM', attack: 2, health: 1 },
					{ instrument: 'PIANO', attack: 2, health: 2 },
				],
				id: '6253be7bbddbd76f27821574',
				name: 'demoTeam',
			},
			initialEnemyTeam: {
				creatures: [
					{ instrument: 'GUITAR', attack: 0, health: 1 },
					{ instrument: 'PIANO', attack: 2, health: 2 },
				],
				id: '6253c6eabddbd76f2782157e',
				name: 'demo2Team',
			},
		},
		turns: [
			{
				fromCreature: { instrument: 'DRUM', attack: 2, health: 1 },
				toCreature: { instrument: 'GUITAR', attack: 0, health: -1 },
				effect: { damage: 2 },
			},
			{ result: 'playerTeam wins' },
		],
	};

	return (
		<div>
			{/* <button onClick={} className="bg-red-300 p-4 mb-4">
				Battle!
			</button> */}
			<div className="flex justify-between">
				<div>
					<h1> {battle.teams.initialEnemyTeam} </h1>
					{playerTeam.creatures.map((creature, index) => (
						<ElCreature key={index} {...creature} />
					))}
				</div>
				<div>
					<h1> {enemyTeam.name} </h1>
					{enemyTeam.creatures.map((creature, index) => (
						<ElCreature key={index} {...creature} />
					))}
				</div>
			</div>
		</div>
	);
};

export default BattleView;
