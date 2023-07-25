'use client'
import { useContext } from "react"
import {AppContext} from '../../components/AppContext'

const TeamPage = () => {
    const contextValues = useContext(AppContext)
    console.log(contextValues);
    
  
    return (
        <p>Page des teams</p>
    )
}

export default TeamPage