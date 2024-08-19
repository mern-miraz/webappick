import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import footerImg1 from "../assets/footer1.png"
import footerImg2 from "../assets/footer2.png"


const Footer = () => {
  return (
    <section id='' className='pt-[120px] pb-[40px] bg-[#286054]'>
        <Container>
            <div className="">
                <div className=" text-center">
                    <h3 className='text-[36px] text-[#FFFFFF] font-normal'>Subscribe to get notified about update</h3>
                    <p className='text-[16px] text-[#FFFFFF] font-normal leading-[35px] opacity-[0.6]'>By subscribing with your mail, you will accept our privacy policy</p>
                </div>

                <div className="mt-[65px]  relative flex items-center justify-center">
                    <input required type="email" name="" id="" placeholder='Enter your email' className='h-[60px] w-[380px] ps-[30px] rounded-[5px] bg-white bg-opacity-[0.08] placeholder:text-white placeholder:text-[16px] placeholder:font-normal placeholder:leading-[50px] outline-none placeholder:opacity-[0.5] text-[20px] text-white' />
                    <button className='text-[18px] text-[#FFFFFF] font-normal leading-[50px] tracking-[-0.5px] ms-[15px] opacity-[0.8] py-[5px] px-[25px] bg-[#CC8663] rounded-[4px]'>Subscribe us</button>
                    <img src={footerImg1} alt="footer1" className=' absolute bottom-[-30px] left-[50px]'/>
                    <img src={footerImg2} alt="footer2" className=' absolute bottom-[20px] right-[50px]'/>
                </div>

                <div className="mt-[150px]">
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
            </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Footer