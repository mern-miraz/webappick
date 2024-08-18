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
            <div className=" flex">
                <div className="w-[447px]">
                    <div className="">
                        <h3 className='text-[36px] text-[#2C2C2C] font-semibold'>Why do we <span className='text-[#CB8461]'>exist?</span></h3>
                        <p className='text-[16px] text-[#808080] font-normal leading-[35px] mt-6'>Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills</p>                        
                    </div>

                    <div className=" py-[30px] border-b-2 flex items-center">
                        <img src={CEOImg} alt="profileCEO" />
                        <div className="ms-[15px]">
                            <h3 className='text-[18px] text-[2C2C2C] font-semibold leading-[35px] '>Jerony Pulquosta</h3>
                            <h4 className='text-[12px] text-[#808080] font-normal'>CEO Skill Shoot</h4>
                        </div>
                    </div>

                    <div className=" flex my-[30px]">
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

                <div className="w-[602px] flex justify-between flex-wrap ms-[271px]">
                    <div className="w-[50%]">
                            <div className="">
                                <img src={profileImg1} alt="profile1" />
                                <h3 className='text-[24px] text-[#245D51] font-semibold mt-[30px]'>Material Limitations</h3>
                                <p className='mt-[10] text-[#808080] text-[16px] font-normal leading-[35px] pr-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                    </div>

                    <div className="w-[50%]">
                            <div className="">
                                <img src={profileImg2} alt="profile2" />
                                <h3 className='text-[24px] text-[#245D51] font-semibold mt-[30px]'>Unprofessional Mentor</h3>
                                <p className='mt-[10] text-[#808080] text-[16px] font-normal leading-[35px] pr-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                    </div>

                    <div className="w-[50%] mt-[61px]">
                            <div className="">
                                <img src={profileImg3} alt="profile3" />
                                <h3 className='text-[24px] text-[#245D51] font-semibold mt-[30px]'>Video Quality</h3>
                                <p className='mt-[10] text-[#808080] text-[16px] font-normal leading-[35px] pr-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                    </div>

                    <div className="w-[50%] mt-[61px]">
                            <div className="">
                                <img src={profileImg4} alt="profile4" />
                                <h3 className='text-[24px] text-[#245D51] font-semibold mt-[30px]'>High Price</h3>
                                <p className='mt-[10] text-[#808080] text-[16px] font-normal leading-[35px] pr-[50px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Profile