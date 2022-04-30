// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Action } from '../services/Action';
import { Battle } from '../services/Battle';
import { Team } from '../services/Team';
import { Turn } from '../services/Turn';
import { v4 as uuidv4 } from 'uuid';
import { Creature } from '../services/Creature';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const creature1 = new Creature(uuidv4(), 'Ant', 1, 3, 1);
	const creature2 = new Creature(uuidv4(), 'Beaver', 1, 5, 1);

	const playerTeam = new Team('id1', 'demoTeam1', [creature1]);
	const enemyTeam = new Team('id2', 'demoTeam2', [creature2]);

	const battle = new Battle();

	let i = 0;
	// while (playerTeam.creatures.length > 0 || enemyTeam.creatures.length > 0) {
	while (i < 3) {
		const turn = new Turn();
		turn.setPlayerTeam(playerTeam.getTeam());
		turn.setEnemyTeam(enemyTeam.getTeam());

		// Basic combat phase
		turn.pushBasicAttackPhase();

		turn.resolve();

		// for (const action of actions.getActions()) {
		// 	if (action.type === 'attack') {
		// 		const from = action.from;
		// 		const to = action.to;

		// 	}
		// }

		// enemyTeam.getCreatures()[0].health -= 1;

		// // Trigger the actions
		// 	const { type, from, to } = action;
		// 	if (type === 'attack') {
		// 		const dealer = BattleService.getCreatureFromId(teams, from);
		// 		const target = BattleService.getCreatureFromId(teams, to);
		// 		target.health -= dealer.attack;
		// 	}

		// If any creatures are dead, remove them from the team
		// playerTeam.creatures = playerTeam.creatures.filter(creature => creature.health > 0);
		// enemyTeam.creatures = enemyTeam.creatures.filter(creature => creature.health > 0);

		// // Result
		// if (playerTeam.creatures.length === 0 && enemyTeam.creatures.length === 0) {
		// } else if (playerTeam.creatures.length === 0) {
		// } else if (enemyTeam.creatures.length === 0) {
		// }

		i++;

		battle.pushTurn(turn.getTurn());
	}

	res.json(battle.getTurns());
}
