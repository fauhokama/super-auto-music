// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const team = await prisma.team.create({
		data: {
			name: 'demoTeam',
			creatures: [
				{
					health: 1,
					attack: 2,
					instrument: 'DRUM',
				},
				{
					health: 2,
					attack: 2,
					instrument: 'PIANO',
				},
			],
		},
	});

	res.json(team);
}
