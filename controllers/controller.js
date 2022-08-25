import { handleError } from './errors/handleError.js';
export class Controller {
    constructor(service) {
        this.service = service;
    }
    async createService(req, res) {
        try {
            const response = await this.service.createService(req.body);
            return response;
        } catch (err) {
            handleError(err, res);
        }
    }
    async updateService(req, res) {
        try {
            const idParam = req.params.id;
            const response = await this.service.updateService(
                req.body,
                idParam,
            );

            return response;
        } catch (err) {
            handleError(err, res);
        }
    }
    async deleteService(req, res) {
        try {
            const idParam = req.params.id;
            const response = await this.service.deleteService(idParam);
            return response;
        } catch (err) {
            handleError(err, res);
        }
    }
    async findAll(req, res) {
        try {
            const response = await this.service.findAllService();
            res.status(200).send(response);
        } catch (err) {
            res.status(500);
        }
    }
    async findById(req, res) {
        try {
            const idParam = req.body.id;
            const response = await this.service.findByIdService(idParam);
            res.status(200).send(response);
        } catch (err) {
            handleError(err, res);
        }
    }
}