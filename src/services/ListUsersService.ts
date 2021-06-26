import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"



class ListUsersService {
    async execute() {
        const listUsersRepositories = getCustomRepository(UsersRepositories)

        const users = await listUsersRepositories.find()
        return users
    }
}


export {ListUsersService}