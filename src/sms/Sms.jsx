import React, { useContext } from 'react'
import { context } from '../App'

function Sms() {

  const {sms,setSms}=useContext(context);

  return (
    <div>{
      (sms.length===0)?
      (<p className='text-center mt-24'>No messages sent yet</p>):
      (sms.map((i)=>{
        return (<div className='flex flex-col mx-8'>
          <div className='py-2 w-full bg-slate-100 px-4 cursor-pointer flex flex-row justify-between space-y-2 my-1'>
              <div className='space-y-2'>
                <p className='font-semibold'>{i.name}</p>
                <p className='text-2xl'>{i.otp}</p>
              </div>
            <p>{i.time}</p>
          </div>
        </div>)}))
    }</div>
  );
}

export default Sms