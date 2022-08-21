import { UserEntity } from './entities/User.entity.js';

const newUser = new UserEntity({
    name: 'Raul',
    userPassword: 'teste123',
    userEmail: 'raul@gmail.com',
    userImage: 'https://avatars.githubusercontent.com/u/106101973?v=4',
    charactersList: [
        {
            id: '8f8f1eca-e595-4684-b92a-7f43d27bbd66',
            name: 'Itachi Uchiha',
            urlImage: 'http://itachi.com',
            userId: 'd053cf29-48d2-44eb-90a5-d33b3de2fc57',
        },
    ],
});

newUser.addCharacter({
    name: 'Rick Sanchez',
    urlImage: 'http://rick.com',
});

console.log(newUser.getUser());
