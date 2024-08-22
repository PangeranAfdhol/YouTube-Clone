"use client"

import React, { useRef } from 'react'
import './Navbar.css'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'


// import search_icon from '../../assets/search.png'

const InputSearch = () => {
    const searchRef = useRef()
    // const router = useNavigate()
    
    const handleSearch = (event) => {
        event.preventDefault()
        alert(searchRef.current.value)
        // const keyword = searchRef.current.value
        // router.push(`/search/${keyword}`)
    }

  return (
    <div>
          <input type="text" placeholder='Search' ref={searchRef} />
          {/* <img src={search_icon} alt="" /> */}
            <button onClick={handleSearch}>
                <MagnifyingGlass size={17} />
            </button>
          </div>
  )
}

export default InputSearch