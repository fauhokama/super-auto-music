import { Creature } from './Creature';

export class Action {
	private type: string;
	private from: Creature;
	private to: Creature;

	constructor() {
		this.type = '';
		this.from = {} as Creature;
		this.to = {} as Creature;
	}

	isAttack(): boolean {
		return this.type === 'attack';
	}

	setAttackAction(from: Creature, to: Creature) {
		this.type = 'attack';
		this.from = from.getCreature();
		this.to = to.getCreature();
	}

	getFrom(): Creature {
		return this.from;
	}

	getTo(): Creature {
		return this.to;
	}
}
