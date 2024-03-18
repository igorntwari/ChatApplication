import { useEffect, useState } from "react";
import { api } from "../api.ts";

export default  function useGetAllUsers(currentUserId){
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        async function GetUsers(){
            try {
                const response = await fetch(`${api}/allusers`)
                const users = await response.json()
                if(users.error){
                    setIsError(true)
                }
                const filterUsers = users.filter(user => user._id !== currentUserId)
                setUsers(filterUsers)
                
            } catch (error) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
            
        }
        
        GetUsers()
        
        
    }, [currentUserId])
    
    return {users, isLoading, isError}
    
}