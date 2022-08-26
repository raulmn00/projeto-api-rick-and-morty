import { Controller } from './controller.js';

export class CharacterController extends Controller {
    constructor(service, findCharacterByName) {
        super(service);
        this.findCharacterByName = findCharacterByName;
    }
    async findCharacterByName(req, res) {
        const characterName = req.body.name;
        const response = await findCharacterByName.execute(characterName);
        res.status(200).send(response);
    }
}
