import React from 'react'
import Container from './Container'
import discountImg from "../assets/discount.png"
import discountImg1 from "../assets/discount1.png"
import discountImg2 from "../assets/discount2.png"
import discountImg3 from "../assets/discount3.png"
import discountImg4 from "../assets/discount4.png"

const Discount = () => {
  return (
    <section id='' className='py-[80px]'>
        <Container>
            <div className=" bg-[#F2E7DB] rounded-[10px] relative">
                <div className=" relative overflow-hidden rounded-[10px]">
                        <div className="py-[52px] ms-[61px] w-[586px]">
                        <h3 className='text-[36px] text-[#2C2C2C] font-semibold'>Happy <span className='text-[#CB8461]'>Chinese New Year</span>, 20% discount for you today</h3>
                        <button className='text-[20px] text-[#FFFFFF] font-bold py-[15px] px-[25px] bg-[#245D51] rounded-[4px] mt-[30px]'>Subscribe Course</button>
                        </div>

                        <div 
                        className=" absolute top-[-12px] left-[-13px] h-[73px] w-[73px] rounded-full bg-[#245D51]">
                        </div>
                        <div 
                        className=" absolute bottom-[-12px] right-[-13px] h-[73px] w-[73px] rounded-full bg-[#245D51]">
                        </div>
                </div>
                <div className=" absolute bottom-0 right-[143px]">
                        <img src={discountImg} alt="discount" />                   
                </div>

                <div className="">
                    <img src={discountImg1} alt="discount1"  className='absolute top-[67px] right-[404px]'/>
                    <img src={discountImg2} alt="discount2"  className='absolute top-[63px] right-[80px]' />
                    <img src={discountImg3} alt="discount3"  className='absolute bottom-[22px] right-[123px]' />
                    <img src={discountImg4} alt="discount4"  className='absolute bottom-[42px] right-[387px]' />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Discount