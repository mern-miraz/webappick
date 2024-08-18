import React from 'react'
import Container from './Container'
import aboutImg from "../assets/about1.png"
import { FiUser, FiUserCheck  } from "react-icons/fi";
import { BiVideoRecording } from "react-icons/bi";
import { CgPlayButtonO } from "react-icons/cg";




const About = () => {
  return (
     <section id='' className='py-[50px]'>
        <Container>
            <div className="flex ">
                <div className="w-[457px]">
                  <img src={aboutImg} alt="about1" className='w-full'/>
                </div>
                <div className="w-[535px] ms-[150px] mt-[98px]">
                    <div className="">
                      <h2 className='text-[48px] text-[#2C2C2C] font-bold'>Let us <span className='text-[#245D51]'>Skill Shoot</span></h2>
                      <p className='text-[16px] text-[#808080] font-normal leading-[35px] mt-[27px]'>We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.
                      </p>
                      <p className='text-[16px] text-[#808080] font-normal leading-[35px] mt-[25px]'>we have been around since 2019 with currently 100+ updated materials and 15K members who have joined.</p>
                    </div>
                    <div className="w-[100%] flex justify-between flex-wrap mt-[36px]">
                            <div className="w-[50%] flex items-center">
                              <div className="h-[50px] w-[50px] rounded-full bg-[#CB846130] flex items-center justify-center">
                                <FiUser className='text-[25px] text-[#CB8461] '/>
                              </div>
                              <h2 className='text-[16px] text-[#2C2C2C] font-semibold leading-[35px] ms-[15px]'>15K People Join</h2>
                            </div>

                            <div className="w-[50%] flex items-center">
                              <div className="h-[50px] w-[50px] rounded-full bg-[#CB846130] flex items-center justify-center">
                              <FiUserCheck className='text-[25px] text-[#CB8461]'/>
                              </div>
                              <h2 className='text-[16px] text-[#2C2C2C] font-semibold leading-[35px] ms-[15px]'>Trusted Mentor</h2>
                            </div>

                            <div className="w-[50%] flex items-center mt-[30px]">
                              <div className="h-[50px] w-[50px] rounded-full bg-[#CB846130] flex items-center justify-center">
                                <BiVideoRecording className='text-[25px] text-[#CB8461]'/>
                              </div>
                              <h2 className='text-[16px] text-[#2C2C2C] font-semibold leading-[35px] ms-[15px]'>30+ Free Videos</h2>
                            </div>

                            <div className="w-[50%] flex items-center mt-[30px]">
                              <div className="h-[50px] w-[50px] rounded-full bg-[#CB846130] flex items-center justify-center">
                              <CgPlayButtonO className='text-[25px] text-[#CB8461]'/>
                              </div>
                              <h2 className='text-[16px] text-[#2C2C2C] font-semibold leading-[35px] ms-[15px]'>100+ Premium Videos</h2>
                            </div>
                    </div>
                </div>
            </div>
        </Container>
     </section>
  )
}

export default About