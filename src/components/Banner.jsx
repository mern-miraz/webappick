import React from 'react'
import Container from './Container'
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter, FaDiscord  } from "react-icons/fa6";
import bannerImg from "../assets/banner.png"
import bannerImg1 from "../assets/banner1.png"
import { HiArrowUpRight } from "react-icons/hi2";
import { BiSolidPencil } from "react-icons/bi";
import { MdOutlinePlayCircle } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";






const Banner = () => {
  return (
    <section id='' className='bg-[#245D51] lg:pt-[150px]'>
        <Container className="">
            <div className=" flex justify-between">
                <div className=" lg:w-3/5 w-full lg:pr-[150px] text-center lg:text-start lg:mt-28 mt-0">
                    <div className="">
                        <h3 
                        className='lg:text-[60px] text-[28px] font-semibold text-[#FFFFFF]'>
                            There is always something new for us to learn</h3>
                            
                        <p className='text-[#FFFFFF99] lg:text-[18px] text-xs lg:leading-[35px] leading-[30px] font-normal lg:pr-[100px] mt-[10px] text-center lg:text-start'>we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.</p>
                    </div>
                    <div className=" mt-[32px] lg:flex gap-x-5">
                        <div className=" flex justify-center">
                        <a href="#" className=' flex items-center justify-between py-3 px-[25px] rounded-lg bg-[#CB8461] font-bold text-[#FFFFFF] lg:text-xl text-base'>Start Journey <HiArrowUpRight className='ms-2'/> </a>
                        </div>
                        <div className=" flex items-center justify-center mt-7 lg:mt-0 gap-x-[15px] text-3xl text-white"> 
                            <RiInstagramFill/>
                            <FaTwitter/>
                            <FaDiscord/>
                        </div>
                    </div>
                </div>

                <div className="w-2/5 pr-[50px] hidden lg:block">
                    <div className=" relative">
                        <img src={bannerImg} alt="banner" className='w-full'/>                      
                        <span className='absolute top-11 left-3 h-[47px] w-[47px] bg-[#F88C3D] rounded-lg flex justify-center items-center -rotate-[15deg]'><BiSolidPencil className='text-2xl text-white'/></span>    

                        <span className='absolute top-[151px] right-10 h-[47px] w-[47px] bg-[#7252A4] rounded-lg flex justify-center items-center rotate-[4.98deg]'><MdOutlinePlayCircle className='text-2xl text-white'/></span>  

                        <span className='absolute bottom-9 right-0 h-[47px] w-[47px] bg-[#23BDEE] rounded-lg flex justify-center items-center -rotate-[15deg]'><LuCalendarDays className='text-2xl text-white'/></span>     

                        <div className=" absolute bottom-[200px] left-[-80px] h-[103px] w-[227px] bg-[#FFFFFFBF] rounded-xl">
                            <div className=" flex items-center justify-around mt-3">
                                    <img src={bannerImg1} alt="banner1" />
                                    <div className="">
                                        <h3 className='text-[12px] text-[#2C2C2C] font-semibold'>Learn basic ui ux design</h3>
                                        <h4 className='text-[12px] text-[#2C2C2CB2] font-normal '>Today at 12 PM</h4>
                                    </div>
                            </div>

                            <div className=" flex justify-center mt-2">
                                <a href="#" className='text-xs text-[#FFFFFF] font-semibold py-[7px] px-[23px] bg-[#FF4F8E] rounded-md'>Join Now</a>
                            </div>
                        </div>               
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Banner