import axios from 'axios'
import { User } from '../../domain/entities/User'
import { UserRepository } from '~/domain/repositories/user.repository'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export class UserApi implements UserRepository {
    async getUsers(): Promise<User[]> {
        const response = await axios.get(API_URL)
        return response.data.map((user: any) => new User(user))
    }

    async getUserById(id: number): Promise<User | null> {
        try {
            const response = await axios.get(`${API_URL}/${id}`)
            return new User(response.data)
        } catch (error) {
            return null
        }
    }
}