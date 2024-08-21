import React from 'react'
import Container from './Container'
import uberImg from "../assets/uber.png"
import googleImg from "../assets/google.png"
import paypalImg from "../assets/paypal.png"
import microsoftImg from "../assets/microsoft.png"
import dribbbleImg from "../assets/dribbble.png"

const Media = () => {
  return (
    <section id='' className='lg:py-[100px] py-[50px]'>
        <Container>
            <div className=" text-center">
                <h3 className=' lg:text-[36px] text-[16px] font-semibold text-[#2C2C2C]'>Trusted more than <span className='text-[#CB8461]'>100+</span> in the world</h3>
                <p className='lg:text-[16px] text-[12px] text-[#808080] font-normal lg:leading-[35px] leading-[30px] px-5 lg:px-0 mt-3 lg:w-1/2 w-full mx-auto '>they have asked us more than 3 times to teach their employees about various things. to improve their skills</p>
            </div>


            <div className="lg:w-11/12 w-full mx-auto flex justify-between items-center mt-[50px] flex-wrap">
                <div className=" lg:w-1/5 w-1/2"><img src={uberImg} alt="uber" /></div>               
                <div className=" lg:w-1/5 w-1/2"><img src={googleImg} alt="google"  /></div>
                <div className=" lg:w-1/5 w-1/2 mt-6"><img src={paypalImg} alt="paypal"  /></div>
                <div className=" lg:w-1/5 w-1/2 mt-6"><img src={microsoftImg} alt="microsoft"  /></div>
                <div className=" lg:w-1/5 w-1/2 mt-6 mx-auto"><img src={dribbbleImg} alt="dribbble"  /></div>
            </div>
        </Container>
    </section>
  )
}

export default Media