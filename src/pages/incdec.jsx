import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/counter/counterSlice'
import logo from '../assets/react.svg'

export default function Incdec() {

    const count = useSelector((state=>state.counter))
    const dispatch = useDispatch()

  return (
    <div className='incdec '>
        <header className='incdec-header '>
            <img className='flex justify-center' src={logo} alt="Logo" />
            <h1>Count: {count}</h1>
            <button onClick={()=>dispatch(increment())}>Increase</button>
            <button onClick={()=>dispatch(decrement())}>Decrease</button>
        </header>
    </div>
  )
}

