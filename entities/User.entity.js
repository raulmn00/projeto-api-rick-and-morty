import { randomUUID } from 'node:crypto';
import { CharacterEntity } from './Character.entity.js';

export class UserEntity {
    constructor(user) {
        this.id = user.id ?? randomUUID();
        this.name = user.name;
        this.password = user.password;
        this.email = user.email;
        this.image = user.image;
        this.charactersList = user.charactersList ?? [];
    }

    validate() {
        if (!this.name || !this.password || !this.email || !this.image) {
            throw new Error('User invalid.');
        }
    }

    addCharacter(character) {
        const newCharacter = new CharacterEntity(character, this.id);
        this.charactersList.push(newCharacter.getCharacter());
    }
    getUser() {
        return {
            id: this.id,
            name: this.name,
            password: this.password,
            email: this.email,
            image: this.image,
            charactersList: this.charactersList,
        };
    }
}
