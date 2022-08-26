export class CharacterRoutes {
    constructor(controller, router) {
        this.characterController = controller;
        this.router = router;
    }
    route() {
        this.router.get('/search', (req, res) =>
            this.characterController.findCharacterByName(req, res),
        );
        this.router.get('/all-chars', (req, res) =>
            this.characterController.findAllController(req, res),
        );
        this.router.post('/create-char', (req, res) =>
            this.characterController.createController(req, res),
        );

        this.router.patch('/update-character/:id', (req, res) =>
            this.characterController.updateController(req, res),
        );

        this.router.delete('/delete-character/:id', (req, res) =>
            this.characterController.deleteController(req, res),
        );

        this.router.get('/find-character/:id', (req, res) =>
            this.characterController.findByIdController(req, res),
        );

        return this.router;
    }
}
