import { randomUUID } from 'node:crypto';

export class CharacterEntity {
    name;
    image;
    constructor(character, userId) {
        this.id = character.id ?? randomUUID();
        this.name = character.name;
        this.image = character.image;
        this.userId = userId;
    }
    getCharacter() {
        return {
            id: this.id,
            name: this.name,
            image: this.image,
            userId: this.userId,
        };
    }
    validate() {
        if (!this.name || !this.image || !this.userId) {
            throw new Error('Character invalid.');
        }
    }
}
