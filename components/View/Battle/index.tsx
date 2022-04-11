import { Team } from '@prisma/client';
import { FC } from 'react';
import useSWR from 'swr';
import ElCreature from '../../ElCreature';

const BattleView: FC = () => {
	const fetcher = (url: string): Promise<Team> => fetch(url).then(res => res.json());
	const { data, error } = useSWR('/api/getteam', fetcher);
	if (error) return <div>An error occured.</div>;
	if (!data) return <div>Loading ...</div>;

	return (
		<div>
			{/* <button onClick={} className="bg-red-300 p-4 mb-4">
				Battle!
			</button> */}
			<div className="flex justify-between">
				<div>
					<h1> Team 1 </h1>
					{data.creatures.map((creature, index) => (
						<ElCreature key={index} {...creature} />
					))}
				</div>
			</div>
		</div>
	);
};

export default BattleView;
