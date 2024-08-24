import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import footerImg1 from "../assets/footer1.png"
import footerImg2 from "../assets/footer2.png"


const Footer = () => {
  return (
    <section id='' className=' pt-[104px] pb-[50px] mt-[50px] bg-[#286054]'>
            <Container>
                <div className="text-center lg:pb-[155px] pb-[50px] relative">
                    <div className="">
                        <h2 className='lg:text-[36px] text-[18px] font-normal  text-white lg:px-0 px-10'>Subscribe to get notified about update</h2>
                        <p className='lg:text-[16px] text-[12px] leading-[30px] text-white font-normal opacity-[0.6] pb-[65px]'>By subscribing with your mail, you will accept our privacy policy</p>
                    </div>
                    <form action="" className='lg:flex gap-x-[15px] justify-center'>
                        <input required type="email" name="" id="" placeholder='Enter your email' className='h-[60px] lg:w-[380px] w-full  ps-[30px] rounded-[5px] bg-white bg-opacity-[0.08] placeholder:text-white placeholder:text-[16px] placeholder:font-normal placeholder:leading-[50px] outline-none placeholder:opacity-[0.5] text-[20px] text-white lg:mb-0 mb-[20px]' />
                        <button className='text-[18px] text-[#FFFFFF] font-normal leading-[50px] tracking-[-0.5px] opacity-[0.8] py-[5px] px-[25px] bg-[#CC8663] rounded-[4px]'>Subscribe us</button>
                    </form>
                    <div className="absolute lg:top-[84px] top-[350px] lg:right-[112px] right-0 lg:w-auto w-[15%]">
                        <img src={footerImg1} alt="footer_icon" />
                    </div>
                    <div className="absolute lg:bottom-[105px] bottom-[-120px] lg:left-[112px] left-[9px] lg:w-auto w-[13%]">
                        <img src={footerImg2} alt="footer_icon" />
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:justify-between text-center">
                    <div className="lg:order-1 order-2 flex lg:block justify-center">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="lg:order-2 order-1 mb-[50px] lg:mb-0">
                        <ul className='flex lg:flex-row flex-col gap-[30px] lg:gap-x-[30px] text-[#FFFFFF99]'>
                            <li><a className='lg:border-none text-white rounded-sm' href="#">Home</a></li>
                            <li><a className='lg:border-none rounded-sm' href="#">Course</a></li>
                            <li><a className='lg:border-none rounded-sm' href="#">Subscribe</a></li>
                            <li><a className='lg:border-none rounded-sm' href="#">About</a></li>
                            <li><a className='lg:border-none rounded-sm' href="#">Testimoni</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
  )
}

export default Footer