import React from 'react'
import Container from './Container'
import uberImg from "../assets/uber.png"
import googleImg from "../assets/google.png"
import paypalImg from "../assets/paypal.png"
import microsoftImg from "../assets/microsoft.png"
import dribbbleImg from "../assets/dribbble.png"

const Media = () => {
  return (
    <section id='' className='py-[100px]'>
        <Container>
            <div className=" text-center">
                <h3 className='text-[36px] font-semibold text-[#2C2C2C]'>Trusted more than <span className='text-[#CB8461]'>100+</span> in the world</h3>
                <p className='text-[16px] text-[#808080] font-normal leading-[35px] mt-3 w-[545px] mx-auto'>they have asked us more than 3 times to teach their employees about various things. to improve their skills</p>
            </div>


            <div className="w-[1040px] mx-auto flex justify-between mt-[50px]">
                <img src={uberImg} alt="uber" />
                <img src={googleImg} alt="google" />
                <img src={paypalImg} alt="paypal" />
                <img src={microsoftImg} alt="microsoft" />
                <img src={dribbbleImg} alt="dribbble" />
            </div>
        </Container>
    </section>
  )
}

export default Media