import React from 'react'
import Container from './Container'
import discountImg from "../assets/discount.png"
import discountImg1 from "../assets/discount1.png"
import discountImg2 from "../assets/discount2.png"
import discountImg3 from "../assets/discount3.png"
import discountImg4 from "../assets/discount4.png"

const Discount = () => {
  return (
    <section id='' className='lg:py-[80px]'>
        <Container>
            <div className=" bg-[#F2E7DB] rounded-[10px] relative">
                <div className=" relative overflow-hidden rounded-[10px]">
                        <div className="py-[52px] lg:ms-[61px] ms-3 lg:w-1/2 w-full">
                        <h3 className='lg:text-[36px] text-[18px] text-[#2C2C2C] font-semibold text-center lg:text-start'>Happy <span className='text-[#CB8461]'>Chinese New Year</span>, 20% discount for you today</h3>
                        <div className=" flex justify-center lg:justify-start">
                        <button className='lg:text-[20px] text-[14px] text-[#FFFFFF] font-bold py-[15px] px-[25px] bg-[#245D51] rounded-[4px] mt-[30px] text-center'>Subscribe Course</button>
                        </div>
                        </div>

                        <div 
                        className=" absolute -top-3 -left-3 lg:h-[73px] lg:w-[73px] h-12 w-12 rounded-full bg-[#245D51]">
                        </div>
                        <div 
                        className=" absolute -bottom-3 -right-3 lg:h-[73px] lg:w-[73px] h-12 w-12 rounded-full bg-[#245D51]">
                        </div>
                </div>
                <div className=" absolute bottom-0 right-[143px] hidden lg:block">
                        <img src={discountImg} alt="discount" />                   
                </div>

                <div className="">
                    <img src={discountImg1} alt="discount1"  className='absolute top-[67px] right-[404px] hidden lg:block'/>
                    <img src={discountImg2} alt="discount2"  className='absolute top-[63px] right-[80px] hidden lg:block' />
                    <img src={discountImg3} alt="discount3"  className='absolute bottom-[22px] right-[123px] hidden lg:block' />
                    <div className="absolute lg:bottom-[42px] lg:right-[387px] hidden lg:block"><img src={discountImg4} alt="discount4"  className='' /></div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Discount