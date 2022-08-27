export class AuthRouter {
    constructor(controller, router) {
        this.controller = controller;
        this.router = router;
    }
    route() {
        this.router.post('/login', (req, res) =>
            this.controller.login(req, res),
        );
        return this.router;
    }
}
