import React from 'react'
import Container from './Container'
import aboutImg from "../assets/about.png"
import aboutImg1 from "../assets/about1.png"
import { FiUser, FiUserCheck  } from "react-icons/fi";
import { BiVideoRecording } from "react-icons/bi";
import { CgPlayButtonO } from "react-icons/cg";
import { BiSolidPencil } from "react-icons/bi";
import { MdOutlinePlayCircle } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";





const About = () => {
  return (
     <section id='' className='lg:py-[100px] py-[50px]'>
        <Container>
            <div className="flex">
                <div className=" flex items-end">
                <div className="w-[457px] hidden lg:block ms-11">
                  <div className="w-full h-[388px] bg-[#245D51] rounded-tr-[200px] rounded-tl-[200px] relative">
                      <img src={aboutImg} alt="about" className='w-full absolute bottom-0'/>
                      <span className='absolute -top-20 right-10 h-[47px] w-[47px] bg-[#F88C3D] rounded-lg flex justify-center items-center -rotate-[15deg]'><BiSolidPencil className='text-2xl text-white'/></span>  
                      <span className='absolute top-[-90px] left-[30px] h-[47px] w-[47px] bg-[#7252A4] rounded-lg flex justify-center items-center rotate-[4.98deg]'><MdOutlinePlayCircle className='text-2xl text-white'/></span> 
                      <span className='absolute top-20 left-3 h-[47px] w-[47px] bg-[#23BDEE] rounded-lg flex justify-center items-center -rotate-[15deg]'><LuCalendarDays className='text-2xl text-white'/></span>  

                      <div className=" absolute bottom-14 right-6 h-[103px] w-[227px] bg-[#FFFFFFBF] rounded-xl">
                            <div className=" flex items-center justify-around mt-3">
                                    <img src={aboutImg1} alt="about1" />
                                    <div className="">
                                        <h3 className='text-[12px] text-[#2C2C2C] font-semibold'>How to build a team</h3>
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
                <div className="lg:w-[535px] w-full lg:ms-[150px] lg:mt-[98px]">
                    <div className="">
                      <h2 className='lg:text-[48px] text-[20px] text-[#2C2C2C] font-bold'>Let us <span className='text-[#245D51]'>Skill Shoot</span></h2>
                      <p className='lg:text-[16px] text-[14px] text-[#808080] font-normal leading-[30px] lg:leading-[35px] mt-[27px]'>We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.
                      </p>
                      <p className='lg:text-[16px] text-[14px] text-[#808080] font-normal leading-[35px] mt-[25px]'>we have been around since 2019 with currently 100+ updated materials and 15K members who have joined.</p>
                    </div>
                    <div className="w-[100%] flex justify-between flex-wrap mt-[36px]">
                            <div className="w-[50%] flex items-center">
                              <div className="lg:h-[50px] lg:w-[50px] h-[30px] w-[30px] rounded-full bg-[#CB846130] flex items-center justify-center">
                                <FiUser className='lg:text-[25px] text-[15px] text-[#CB8461] '/>
                              </div>
                              <h2 className='lg:text-[16px] text-[12px] text-[#2C2C2C] font-semibold leading-[35px] ms-[15px]'>15K People Join</h2>
                            </div>

                            <div className="w-[50%] flex items-center">
                              <div className="lg:h-[50px] lg:w-[50px] h-[30px] w-[30px] rounded-full bg-[#CB846130] flex items-center justify-center">
                              <FiUserCheck className='lg:text-[25px] text-[15px] text-[#CB8461]'/>
                              </div>
                              <h2 className='lg:text-[16px] text-[12px] text-[#2C2C2C] font-semibold leading-[35px] ms-[15px]'>Trusted Mentor</h2>
                            </div>

                            <div className="w-[50%] flex items-center mt-[30px]">
                              <div className="lg:h-[50px] lg:w-[50px] h-[30px] w-[30px] rounded-full bg-[#CB846130] flex items-center justify-center">
                                <BiVideoRecording className='lg:text-[25px] text-[15px] text-[#CB8461]'/>
                              </div>
                              <h2 className='lg:text-[16px] text-[12px] text-[#2C2C2C] font-semibold leading-[35px] ms-[15px]'>30+ Free Videos</h2>
                            </div>

                            <div className="w-[50%] flex items-center mt-[30px]">
                              <div className="lg:h-[50px] lg:w-[50px] h-[30px] w-[30px] rounded-full bg-[#CB846130] flex items-center justify-center">
                              <CgPlayButtonO className='lg:text-[25px] text-[15px] text-[#CB8461]'/>
                              </div>
                              <h2 className='lg:text-[16px] text-[12px] text-[#2C2C2C] font-semibold leading-[35px] lg:ms-[15px]'>100+ Premium Videos</h2>
                            </div>
                    </div>
                </div>
            </div>
        </Container>
     </section>
  )
}

export default About