type CreatureType = 'Ant' | 'Beaver';

export class Creature {
	private id: string;
	private type: CreatureType;
	private attack: number;
	private health: number;
	private order: number;

	constructor(id: string, type: CreatureType, attack: number, health: number, order: number) {
		this.id = id;
		this.type = type;
		this.attack = attack;
		this.health = health;
		this.order = order;
	}

	getOrder(): number {
		return this.order;
	}

	getAttack(): number {
		return this.attack;
	}

	getHealth(): number {
		return this.health;
	}

	getId(): string {
		return this.id;
	}

	getCreature(): Creature {
		return this;
	}

	reduceHealth(amount: number): void {
		this.health -= amount;
	}
}
