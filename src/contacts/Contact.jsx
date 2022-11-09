import React from 'react'
import Directory from './../directory.json'
import {Link, useNavigate, useParams} from 'react-router-dom';

function Contact() {

    const {id}=useParams();
    const navigate=useNavigate();

  return (
    <div className='m-6 p-8 bg-slate-100 rounded-xl '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 rounded-full p-2 hover:bg-white cursor-pointer" onClick={()=>{navigate(-1)}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      <div className='flex flex-col items-center space-y-6'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-18">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
            <p className='font-bold text-2xl'>{Directory[id].fname+" "+Directory[id].lname}</p>
            <p>{Directory[id].number}</p>
            <div><Link to={'compose'} className='primaryColor p-3 rounded-lg'>Send Message</Link></div>
      </div>
    </div>
  )
}

export default Contact