import { randomUUID } from 'node:crypto';

export class CharacterEntity {
    name;
    urlImage;
    constructor(character, userId) {
        this.id = id.randomUUID();
        this.name = character.name;
        this.urlImage = character.urlImage;
        this.userId = userId;
    }
    getCharacter() {
        return {
            id: this.id,
            name: this.name,
            urlImage: this.urlImage,
            userId: this.userId,
        };
    }
}
