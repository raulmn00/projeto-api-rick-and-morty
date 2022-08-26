import { Controller } from './controller.js';

export class CharacterController extends Controller {
    constructor(service, findCharacterByName) {
        super(service);
        this.findCharacterByNameController = findCharacterByName;
    }

    async findCharacterByName(req, res) {
        const name = req.body.name;
        const response = await this.findCharacterByNameController.execute(name);
        res.status(200).send(response);
    }
}
