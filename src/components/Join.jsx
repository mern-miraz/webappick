import React from 'react'
import Container from './Container'
import joinImg from "../assets/join1.png"

const Join = () => {
  return (
    <section id='' className='py-[50px]'>
        <Container>
            <div className="bg-[#F2E7DB] rounded-[15px] relative w-full">
                <div className="">
                    <img src={joinImg} alt="join1" className=' absolute lg:bottom-[-23.95px] lg:right-[527px] right-0 bottom-28 w-8 lg:w-14'/>
                </div>
                <div className="relative overflow-hidden rounded-[15px] ">
                    <div className="h-[73.41px] w-[73.41px] rounded-full bg-[#245D51] absolute top-[-13px] left-[-12px]"></div>
                        <div className="py-[71px] lg:flex lg:ms-[67px] items-center">
                    <div className="lg:w-[50%] w-full">
                        <h2 className='lg:text-[36px] text-[18px] text-[#2C2C2C] font-semibold text-center lg:text-start px-10 lg:px-0'><span className='text-[#CB8461]'>Improve</span> your skills, and reach your career as soon as possible</h2>
                    </div>
                    <div className=" lg:flex lg:w-[50%] w-full justify-center lg:gap-x-5 mt-12 lg:mt-0">
                        <div className=" flex justify-center">
                            <a href="#" className='lg:text-[20px] text-[14px] text-[#FFFFFF] font-bold py-[15px] px-[25px] bg-[#CB8461] rounded-[4px]'>Join Now</a>
                        </div>
                        <div className=" mt-6 lg:mt-0 flex justify-center">
                            <a href="#" className='lg:text-[20px] text-[14px]  text-[#FFFFFF] font-bold py-[15px] px-[25px] bg-[#245D51] rounded-[4px]'>Subscribe Course</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Join