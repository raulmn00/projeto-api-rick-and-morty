import { userDb } from "../mongo/schemas/user.schema.js";

export class UserRepositoryMongoDB {
    async create(user) {
        return await userDb.create(user);
    }
    async findById(userId) {
        return await userDb.findOne({ id: userId });
    }

    async deleteUser(userId) {
        return await userDb.findOneAndDelete(userId);
    }
    async updateUser(user) {
        return await userDb.findOneAndUpdate({ id: user.id }, user, {
            new: true,
        });
    }
}
