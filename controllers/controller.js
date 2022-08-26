import { handleError } from './errors/handleError.js';
export class Controller {
    constructor(service) {
        this.service = service;
    }
    async createController(req, res) {
        try {
            const response = await this.service.createService(req.body);
            res.status(201).send(response);
        } catch (err) {
            handleError(err, res);
        }
    }
    async updateController(req, res) {
        try {
            const idParam = req.params.id;
            const response = await this.service.updateService(
                req.body,
                idParam,
            );

            res.status(200).send(response);
        } catch (err) {
            handleError(err, res);
        }
    }
    async deleteController(req, res) {
        try {
            const idParam = req.params.id;
            const response = await this.service.deleteService(idParam);
            res.status(200).send(response);
        } catch (err) {
            handleError(err, res);
        }
    }
    async findAllController(req, res) {
        try {
            const response = await this.service.findAllService();
            res.status(200).send(response);
        } catch (err) {
            res.status(500);
        }
    }
    async findByIdController(req, res) {
        try {
            const idParam = req.params.id;
            const response = await this.service.findByIdService(idParam);
            res.status(200).send(response);
        } catch (err) {
            handleError(err, res);
        }
    }
}
