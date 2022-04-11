// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	let skip = 0;
	if (req.query.skip === 'true') {
		skip = 1;
	}

	//  This should return a random team
	const team = await prisma.team.findFirst({
		skip,
	});
	res.json(team);
}
