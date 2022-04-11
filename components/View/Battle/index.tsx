import { Team } from '@prisma/client';
import { FC } from 'react';
import useSWR from 'swr';
import ElCreature from '../../ElCreature';

const BattleView: FC = () => {
	const fetcher = (url: string): Promise<Team> => fetch(url).then(res => res.json());
	const { data: playerTeam, error: playerError } = useSWR('/api/getteam', fetcher);
	const { data: enemyTeam, error: enemyError } = useSWR('/api/getteam?skip=true', fetcher);

	if (playerError) return <div>An error occured.</div>;
	if (!playerTeam) return <div>Loading ...</div>;

	if (enemyError) return <div>An error occured.</div>;
	if (!enemyTeam) return <div>Loading ...</div>;

	return (
		<div>
			{/* <button onClick={} className="bg-red-300 p-4 mb-4">
				Battle!
			</button> */}
			<div className="flex justify-between">
				<div>
					<h1> {playerTeam.name} </h1>
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
