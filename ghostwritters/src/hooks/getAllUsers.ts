import { api } from "../api.ts"

export async function getAllUsers(){
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '')

    try {
        const response = await fetch(`${api}/allusers`)
        const users = await response.json()
        if(users.error){
            throw new Error(users.error)
        }
        const filterUsers = users.filter(user => user._id !== currentUser._id)

        return filterUsers
        
    } catch (error) {
        console.log(error.message)
    }
}