import React from 'react'

const InputField = (props) => {
  return (
    <div className='mb-3'>
      <label className='text-md block mb-1'>
        {props.label}
      </label>
      <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange}
      className='w-full text-md pl-2 pt-1 m-1 pb-1 rounded-lg border border-stone-500 focus:outline-none focus:ring-1 focus:ring-blue-400' >

      </input>
    </div>
  )
}

export default InputField;