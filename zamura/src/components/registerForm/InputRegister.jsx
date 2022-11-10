import React from 'react'

const InputRegister = (props) => {
    const {title, type, name, value, handle} = props

  return (

    <>
        <div className='mb-3'>
            <label htmlFor='' className='form-label'>
                {title}
            </label>
        
        <input
            type= {type}
            className="form-control"
            id={name}
            name={name}
            placeholder= {`Type your ${name}`}
            value={value}
            onChange={handle}
        />
        </div>
    </>
  )
}

export default InputRegister