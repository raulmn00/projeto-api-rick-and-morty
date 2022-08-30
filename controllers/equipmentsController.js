export class EquipmentsController {
    constructor(createEquipmentUseCase) {
        this.createEquipmentUseCase = this.createEquipmentUseCase;
    }
    async create(req, res) {
        try {
            const equipment = req.body;
            const response = await this.createEquipmentUseCase.execute(
                equipment,
            );
            res.status(200).send(response);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }
}
