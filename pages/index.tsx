import type { NextPage } from 'next';
import useSWR from 'swr';

const Home: NextPage = () => {
	const fetcher = (url: string) => fetch(url).then(res => res.json());
	const { data, error } = useSWR('/api/battle', fetcher);
	if (error) return <div>An error occured.</div>;
	if (!data) return <div>Loading ...</div>;

	return (
		<div>
			<h1> Hello! </h1>
		</div>
	);
};

export default Home;
