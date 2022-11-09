import React from 'react'
import Directory from './../directory.json'
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className='px-8 '>
        {
            Directory.map((i)=>{
                return (
                <Link to={`contact/${i.id}`}>    
                    <div className='py-2 w-full hover:bg-slate-100 px-2 cursor-pointer flex space-x-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        <p>{i.fname+" "+i.lname}</p>
                    </div>
                </Link>)
            })
        }
    </div>
  )
}

export default Contacts