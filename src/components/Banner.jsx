import React from 'react'
import Container from './Container'
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter, FaDiscord  } from "react-icons/fa6";
import bannerImg from "../assets/banner.png"
import { HiArrowUpRight } from "react-icons/hi2";




const Banner = () => {
  return (
    <section id='' className='bg-[#245D51] pt-[250px]'>
        <Container className="">
            <div className=" flex justify-between">
                <div className=" w-[60%] pr-[150px] mt-[-30px]">
                    <div className="">
                        <h3 
                        className='text-[60px] font-semibold text-[#FFFFFF]'>
                            There is always something new for us to learn</h3>
                            
                        <p className='text-[#FFFFFF99] text-[18px] leading-[35px] font-normal pr-[100px] mt-[10px]'>we have created more than 100+ materials on various things that will help your career, with mentors who are experienced in their fields.</p>
                    </div>
                    <div className=" mt-[32px] flex gap-x-[20px]">
                        <div className="">
                        <a 
                        href="#" 
                        className=' flex items-center justify-between py-[12px] px-[25px] rounded-[8px] bg-[#CB8461] font-bold text-[#FFFFFF] text-[20px]'>Start Journey <HiArrowUpRight className='ms-2'/> </a>
                        </div>
                        <div className=" flex items-center gap-x-[15px] text-[30px] text-[white]"> 
                            <RiInstagramFill/>
                            <FaTwitter/>
                            <FaDiscord/>
                        </div>
                    </div>
                </div>

                <div className="w-[40%] pr-[50px]">
                    <img 
                    src={bannerImg} 
                    alt="banner" 
                    className='w-full'/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Banner