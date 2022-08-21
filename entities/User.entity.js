import { randomUUID } from 'node:crypto';
import { CharacterEntity } from './Character.entity.js';

export class UserEntity {
    constructor(user) {
        this.id = user.id ?? randomUUID();
        this.name = user.name;
        this.userPassword = user.userPassword;
        this.userEmail = user.userEmail;
        this.userImage = user.userImage;
        this.charactersList = user.charactersList ?? [];
    }

    validate() {
        if (
            !this.name ||
            !this.userPassword ||
            !this.userEmail ||
            !this.userImage
        ) {
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
            userPassword: this.userPassword,
            userEmail: this.userEmail,
            userImage: this.userImage,
            charactersList: this.charactersList,
        };
    }
}
