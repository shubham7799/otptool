import React, { useContext } from 'react'
import { Link , useParams, useNavigate } from 'react-router-dom';
import Directory from './../directory.json'
import { context } from '../App'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {send} from './sendsms';

function Compose() {

    const {sms,setSms}=useContext(context);
    const otp=Math.floor(100000 + Math.random() * 900000);
    const navigate=useNavigate();
    const {id}=useParams();

    function sendSMS(){
        const text=document.getElementById('sms').value;
        if(/\b\d{6}\b/.test(text)){
            var s=sms;
            var data={
                otp:text.match(/\b\d{6}\b/)[0],
                name:Directory[id].fname+" "+Directory[id].lname,
                time: new Date().toLocaleString()
            }
            try{
                send({to:Directory[id].number,body:text});
            }
            catch(error){
                console.log(error);
            }
            toast('🦄 Wow so easy!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            s.unshift(data);
            console.log(sms);
            setSms(sms=>s);
            //navigate(-2);
        }
        else{
            alert("Please enter 6 digit otp.");
        }
    }

  return (
    <div className='m-6 p-8 bg-slate-100 rounded-xl flex flex-col'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 rounded-full p-2 hover:bg-white cursor-pointer" onClick={()=>{navigate(-1)}}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
    <div className='flex flex-col w-full my-4 mx-6 items-center mt-4'>
        <p className='font-bold'>{Directory[id].fname+" "+Directory[id].lname}</p>
        <div className='flex space-x-4 items-center mt-8'>
            <p>SMS Text: </p>
            <input id='sms' className='p-2 w-72 border border-black rounded-xl' defaultValue={"Hi. Your OTP is: "+otp} />
        </div>
        <Link className='mt-8 px-4 py-2 w-24 primaryColor text-center rounded-xl' onClick={sendSMS}>SEND</Link>
        <ToastContainer className={'h-12 mb-12'} />
    </div></div>
  )
}

export default Compose