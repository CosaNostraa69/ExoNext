"use client"
import {useState} from "react"
import data from "data.json"


const Counter = () => {
    const [ count, setCount] = useState(10)
    const [ search, setSearch] = useState('')

    
    const handleClick = () =>{
        setCount(count + 1)
    }
    const handleSearchInput = (event) =>{
        setSearch(event.target.value)
    }


    const handleSearch = () =>{

        const filteredEmployee = data.people.filter((employee) => {
                return employee.post === search

        })

        console.log(filteredEmployee)
    }

    return(
        <>
        <p>{count}</p>
        <button onClick={handleClick}>Click me</button>
        <input type="text" onChange={handleSearchInput}/>
        <button onClick={handleSearch}>Go Search</button>

        </>
    )
}

export default Counter