import { cloneDeep } from 'lodash';
import { Creature } from './Creature';

export class Team {
	private id: string;
	private name: string;
	private creatures: Creature[];

	constructor(id: string, name: string, creatures: Creature[]) {
		this.id = id;
		this.name = name;
		this.creatures = creatures;
	}

	getCreatures(): Creature[] {
		return this.creatures;
	}

	getTeam(): Team {
		return this;
	}

	getCreatureWithLowestOrder(): Creature {
		return this.creatures.reduce((prev, curr) => {
			return prev.getOrder() < curr.getOrder() ? prev : curr;
		});
	}
}
