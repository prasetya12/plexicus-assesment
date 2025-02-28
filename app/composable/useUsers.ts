import { ref } from 'vue'
import { User } from '~/domain/entities/User'
import { UserApi } from '../infrastucture/api/user.api'

const userApi = new UserApi()

export function useUsers() {
    const users = ref<User[]>([])
    const user = ref<User | null>(null)
    const loading = ref(false)
    const error = ref<string | null>(null)

    const fetchUsers = async () => {
        loading.value = true
        try {
            users.value = await userApi.getUsers()
        } catch (err) {
            error.value = 'Failed to load users'
        } finally {
            loading.value = false
        }
    }

    const fetchUser = async (id: number) => {
        loading.value = true
        try {
            user.value = await userApi.getUserById(id)
        } catch (err) {
            error.value = 'User not found'
        } finally {
            loading.value = false
        }
    }

    return { users, user, loading, error, fetchUsers, fetchUser }
}