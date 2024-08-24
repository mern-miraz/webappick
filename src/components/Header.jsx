import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import { PiGridFourFill } from "react-icons/pi";
import { ImCross } from "react-icons/im";


const Header = () => {

    let [show, setShow] = useState(false)

    let shorRef = useRef()

    useEffect(()=>{
        document.addEventListener("click", (e) => {
            if(shorRef.current.contains(e.target) == true){
                setShow(!show)
            }else{
                setShow(false)
            }          
        })
    },[show])


  return (
    <section className='bg-[#245D51] lg:fixed top-0 left-0 w-full py-5 z-50'>
        <Container>
            <div className="flex items-center justify-between ">
                <div className=" w-1/4">
                    <a href="#"><img src={logo} alt="logo" className=''/></a>   
                </div>

                <div className="w-1/2">
                    <ul className={`lg:flex gap-x-[30px] text-[18px] font-normal leading-[35px] text-[#FFFFFF99] lg:static ${show == true ? "bg-[#245D51] text-[#767676]  w-[180px] pl-[5%] h-full absolute top-0 left-0 duration-700 ease-in-out z-[1]" : " w-[180px] h-full absolute top-0 left-[-200px] duration-700 ease-in-out z-[1]"}`}>
                    <ImCross className='text-[24px] justify-end absolute top-3 right-3 lg:hidden cursor-pointer'/>
                        <li className='hover:text-[#FFFFFF]'><a href="#">Home</a></li>
                        <li className='hover:text-[#FFFFFF]'><a href="#">Course</a></li>
                        <li className='hover:text-[#FFFFFF]'><a href="#">Subscribe</a></li>
                        <li className='hover:text-[#FFFFFF]'><a href="#">About</a></li>
                        <li className='hover:text-[#FFFFFF]'><a href="#">Testimoni</a></li>
                        <li className=' lg:hidden'>
                            <a 
                            href="#" 
                            className='py-[7px] px-[25px] hover:bg-[#CB8461] rounded-[8px] duration-300 ease-in-out'>Login</a>
                        </li>

                        <li className='lg:hidden'>
                            <a 
                            href="#" 
                            className='py-[7px] px-[30px] hover:bg-[#CB8461] rounded-lg duration-300 ease-in-out'>Register</a>
                        </li>
                    </ul>
                </div>

                <div className="w-1/4 hidden lg:block justify-end">
                    <ul className=' flex text-[#FFFFFF] text-[18px] font-normal leading-[35px] justify-end gap-x-5'>
                        <li className=''>
                            <a 
                            href="#" 
                            className=''>Login</a>
                        </li>

                        <li className=''>
                            <a 
                            href="#" 
                            className='py-[7px] px-[30px] bg-[#CB8461] rounded-lg duration-300 ease-in-out'>Register</a>
                        </li>
                    </ul>
                </div>

                <div className=" lg:hidden text-3xl text-white " ref={shorRef}>
                    <PiGridFourFill/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Header