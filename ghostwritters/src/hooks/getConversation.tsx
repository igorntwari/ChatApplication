import { api } from "../api.ts"

export default async function getconversation(id) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '')
    const Conversations = await fetch(`${api}/messages/${currentUser._id}/${id}`)
    const conversation = await Conversations.json()
    if(conversation.error) {
        console.log(conversation.error)
    }
    return conversation
}