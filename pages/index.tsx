import { Team } from '@prisma/client';
import type { NextPage } from 'next';
import useSWR from 'swr';

const Home: NextPage = () => {
	const fetcher = (url: string): Promise<Team> => fetch(url).then(res => res.json());
	const { data, error } = useSWR('/api/getteam', fetcher);
	if (error) return <div>An error occured.</div>;
	if (!data) return <div>Loading ...</div>;

	return (
		<div>
			<h1> {data.name} </h1>
		</div>
	);
};

export default Home;
