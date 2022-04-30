import { Turn } from './Turn';

export class Battle {
	private turns: Turn[];

	constructor() {
		this.turns = [];
	}

	pushTurn(turn: Turn) {
		this.turns.push(turn);
	}

	getTurns(): Turn[] {
		return this.turns;
	}
}
