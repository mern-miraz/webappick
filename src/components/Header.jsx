import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <section className='bg-[#245D51] fixed top-0 left-0 w-full py-5 z-50'>
        <Container>
            <div className="h-[49px] flex items-center justify-between ">
                <div className="">
                    <a href="#"><img src={logo} alt="logo" className='w-full'/></a>
                </div>

                <div className="">
                    <ul className='flex justify-between gap-x-[30px] text-[18px] font-normal leading-[35px] text-[#FFFFFF99] '>
                        <li className='hover:text-[#FFFFFF]'><a href="#">Home</a></li>
                        <li className='hover:text-[#FFFFFF]'><a href="#">Course</a></li>
                        <li className='hover:text-[#FFFFFF]'><a href="#">Subscribe</a></li>
                        <li className='hover:text-[#FFFFFF]'><a href="#">About</a></li>
                        <li className='hover:text-[#FFFFFF]'><a href="#">Testimoni</a></li>
                    </ul>
                </div>

                <div className="">
                    <ul 
                    className=' flex justify-between  text-[#FFFFFF] text-[18px] font-normal leading-[35px]'>
                        <li className=''>
                            <a 
                            href="#" 
                            className='py-[7px] px-[25px] hover:bg-[#CB8461] rounded-[8px] duration-300 ease-in-out'>Login</a>
                        </li>

                        <li className=''>
                            <a 
                            href="#" 
                            className='py-[7px] px-[30px] hover:bg-[#CB8461] rounded-[8px] duration-300 ease-in-out'>Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Header