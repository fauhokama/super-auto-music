import { cloneDeep } from 'lodash';
import { Action } from './Action';
import { Team } from './Team';

type Teams = {
	playerTeam: Team;
	enemyTeam: Team;
};

export class Turn {
	private teams: Teams;
	private actions: Action[];

	constructor() {
		this.teams = {} as Teams;
		this.actions = [];
	}

	getTurn(): Turn {
		return this;
	}

	setPlayerTeam(team: Team) {
		this.teams.playerTeam = cloneDeep(team);
	}

	setEnemyTeam(team: Team) {
		this.teams.enemyTeam = cloneDeep(team);
	}

	pushBasicAttackPhase() {
		const action_1 = new Action();
		action_1.setAttackAction(
			this.teams.playerTeam.getCreatureWithLowestOrder(),
			this.teams.enemyTeam.getCreatureWithLowestOrder()
		);
		const action_2 = new Action();
		action_2.setAttackAction(
			this.teams.enemyTeam.getCreatureWithLowestOrder(),
			this.teams.playerTeam.getCreatureWithLowestOrder()
		);

		this.actions.push(action_1, action_2);
	}

	resolve() {
		this.actions.forEach(action => {
			if (action.isAttack()) {
				const from = action.getFrom();
				const to = action.getTo();

				to.reduceHealth(from.getAttack());
			}
		});
	}
}
