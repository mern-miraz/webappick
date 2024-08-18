import React from 'react'
import Container from './Container'
import joinImg from "../assets/join1.png"

const Join = () => {
  return (
    <section id='' className='py-[50px]'>
        <Container>
            <div className="bg-[#F2E7DB] rounded-[15px] relative">
                <div className="">
                    <img src={joinImg} alt="join1" className=' absolute bottom-[-23.95px] right-[527px]'/>
                </div>
                <div className="relative overflow-hidden rounded-[15px]">
                    <div className="h-[73.41px] w-[73.41px] rounded-full bg-[#245D51] absolute top-[-13px] left-[-12px]"></div>
                <div className="py-[71px] flex ms-[67px] items-center">
                    <div className="">
                        <h2 className='text-[36px] text-[#2C2C2C] font-semibold w-[635px]'><span className='text-[#CB8461]'>Improve</span> your skills, and reach your career as soon as possible</h2>
                    </div>
                    <div className=" flex w-[395px] ms-[116px] justify-between">
                        <div className="">
                            <a href="#" className='text-[20px] text-[#FFFFFF] font-bold py-[15px] px-[25px] bg-[#CB8461] rounded-[4px]'>Join Now</a>
                        </div>
                        <div className="">
                            <a href="#" className='text-[20px] text-[#FFFFFF] font-bold py-[15px] px-[25px] bg-[#245D51] rounded-[4px]'>Subscribe Course</a>
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