import React from 'react'
import Container from './Container'
import CEOImg from "../assets/profileCEO.png"
import profileImg1 from "../assets/profile1.png"
import profileImg2 from "../assets/profile2.png"
import profileImg3 from "../assets/profile3.png"
import profileImg4 from "../assets/profile4.png"

const Profile = () => {
  return (
    <section id='' className='py-[50px]'>
        <Container>
            <div className=" lg:flex">
                <div className="lg:w-2/5 w-full">
                    <div className="">
                        <h3 className='lg:text-[36px] text-[18px] text-[#2C2C2C] font-semibold text-center lg:text-start'>Why do we <span className='text-[#CB8461]'>exist?</span></h3>
                        <p className='lg:text-[16px] text-[12px] text-center lg:text-start text-[#808080] font-normal leading-[35px] mt-6'>Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills</p>                        
                    </div>

                    <div className=" py-[30px] border-b-2 flex items-center justify-center lg:justify-start">
                        <img src={CEOImg} alt="profileCEO" />
                        <div className="ms-[15px]">
                            <h3 className='text-[18px] text-[2C2C2C] font-semibold leading-[35px] '>Jerony Pulquosta</h3>
                            <h4 className='text-[12px] text-[#808080] font-normal'>CEO Skill Shoot</h4>
                        </div>
                    </div>

                    <div className=" flex my-[30px] justify-center lg:justify-start">
                        <div className="">
                            <h3 className='text-[36px] text-[#2C2C2C] font-bold'>100+</h3>
                            <h4 className='text-[12px] text-[#808080] leading-[30px]'>Updated Material</h4>
                        </div>
                        <div className=" ms-[67px]">
                            <h3 className='text-[36px] text-[#2C2C2C] font-bold'>15K</h3>
                            <h4 className='text-[12px] text-[#808080] leading-[30px]'>Member Join</h4>
                        </div>
                    </div>
                </div>

                <div className="lg:w-3/5 w-full lg:flex lg:justify-between lg:flex-wrap lg:ms-[271px]">
                    <div className="lg:w-1/2 w-full text-center lg:text-start">
                            <div className="">
                                <img src={profileImg1} alt="profile1" className='mx-auto lg:mx-0'/>
                                <h3 className='lg:text-[24px] text-[18px] text-[#245D51] font-semibold mt-[30px]'>Material Limitations</h3>
                                <p className='mt-[10px] text-[#808080] lg:text-[16px] text-[12px] font-normal lg:leading-[35px] leading-[30px] lg:pr-[50px] px-6 lg:px-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                    </div>

                    <div className="lg:w-1/2 w-full mt-[30px] lg:mt-0 text-center lg:text-start" >
                            <div className="">
                                <img src={profileImg2} alt="profile2" className='lg:mx-0 mx-auto'/>
                                <h3 className='lg:text-[24px] text-[18px] text-[#245D51] font-semibold mt-[30px]'>Unprofessional Mentor</h3>
                                <p className='mt-[10px] text-[#808080] lg:text-[16px] text-[12px] font-normal lg:leading-[35px] leading-[30px] lg:pr-[50px] px-6 lg:px-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                    </div>

                    <div className="lg:w-1/2 w-full lg:mt-[61px] mt-[30px] text-center lg:text-start">
                            <div className="">
                                <img src={profileImg3} alt="profile3" className='lg:mx-0 mx-auto'/>
                                <h3 className='lg:text-[24px] text-[18px] text-[#245D51] font-semibold mt-[30px]'>Video Quality</h3>
                                <p className='mt-[10px] text-[#808080] lg:text-[16px] text-[12px] font-normal lg:leading-[35px] leading-[30px] lg:pr-[50px] px-6 lg:px-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                    </div>

                    <div className="lg:w-1/2 w-full lg:mt-[61px] mt-[30px] text-center lg:text-start">
                            <div className="">
                                <img src={profileImg4} alt="profile4" className='lg:mx-0 mx-auto'/>
                                <h3 className='lg:text-[24px] text-[18px] text-[#245D51] font-semibold mt-[30px]'>High Price</h3>
                                <p className='mt-[10px] text-[#808080] lg:text-[16px] text-[12px] font-normal lg:leading-[35px] leading-[30px] lg:pr-[50px] px-6 lg:px-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Profile