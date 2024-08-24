import React from 'react'
import Container from './Container'
import testiImg from "../assets/testi1.png"
import testiImg2 from "../assets/testi2.png"
import testiImg3 from "../assets/testi3.png"
import { FaStar  } from "react-icons/fa";
import Slider from "react-slick";
import { HiOutlineArrowRight, HiOutlineArrowLeft  } from "react-icons/hi";



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className=' absolute bottom-[-100px] lg:right-[45%] right-[30%]'> <HiOutlineArrowRight className='text-[20px] text-[#0C111F] hover:text-white h-[54px] w-[54px] rounded-full hover:bg-[#CB8461] p-3 bg-[#FFFFFF] duration-500 ease-in-out cursor-pointer'/> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <div onClick={onClick} className=' absolute bottom-[-100px] lg:left-[45%] left-[30%] z-40'> <HiOutlineArrowLeft className='text-[20px] text-[#0C111F] hover:text-white h-[54px] w-[54px] rounded-full hover:bg-[#CB8461] p-3 bg-[#FFFFFF] duration-500 ease-in-out cursor-pointer'/> </div>
    );
  }

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };


const Testimoni = () => {
  return (
    <section id='' className='pt-[87px] pb-[200px] bg-[#F8F8F8]'>
        <Container>
            <div className="">
                <div className=" text-center">
                    <h3 className='lg:text-[36px] text-[18px] text-[#2C2C2C] font-semibold '>What do they <span className='text-[#CB8461]'>say?</span></h3>
                    <h4 className='text-[16px] text-[#808080] font-normal leading-[35px] mt-4'>This is an honest review from members who have joined us</h4>
                </div>
                <div className="">
                <Slider {...settings}>
                    <div className="w-[413px] tstimoni flex justify-center shadow-lg pb-6">
                        <div className="mt-[49px] text-center">
                            <img src={testiImg} alt="testi1" className='text-center mx-auto' />
                            <div className=" flex justify-center text-[#FF9100] mt-[16px] gap-x-2">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <h3 className='text-[24px] text-[#2C2C2C] font-normal mt-[20px]'>Jason Bay</h3>
                            <p className='text-[16px] text-[#808080] leading-[35px] font-normal mt-[10px] px-[45px]'>I am quite satisfied, because the skills I want or dream of can really be mastered</p>
                        </div>
                    </div>

                    <div className="w-[413px] flex justify-center shadow-lg pb-6">
                        <div className="mt-[49px] text-center">
                            <img src={testiImg2} alt="testi2" className='text-center mx-auto' />
                            <div className=" flex justify-center text-[#FF9100] mt-[16px] gap-x-2">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <h3 className='text-[24px] text-[#2C2C2C] font-normal mt-[20px]'>Nany Brugman</h3>
                            <p className='text-[16px] text-[#808080] leading-[35px] font-normal mt-[10px] px-[45px]'>I am quite satisfied, because the skills I want or dream of can really be mastered</p>
                        </div>
                    </div>

                    <div className="w-[413px] flex justify-center shadow-lg pb-6">
                        <div className="mt-[49px] text-center">
                            <img src={testiImg3} alt="testi3" className='text-center mx-auto' />
                            <div className=" flex justify-center text-[#FF9100] mt-[16px] gap-x-2">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <h3 className='text-[24px] text-[#2C2C2C] font-normal mt-[20px]'>Alexa Nowan</h3>
                            <p className='text-[16px] text-[#808080] leading-[35px] font-normal mt-[10px] px-[45px]'>I am quite satisfied, because the skills I want or dream of can really be mastered</p>
                        </div>
                    </div>
                    
                    <div className="w-[413px] flex justify-center shadow-lg pb-6">
                        <div className="mt-[49px] text-center">
                            <img src={testiImg3} alt="testi3" className='text-center mx-auto' />
                            <div className=" flex justify-center text-[#FF9100] mt-[16px] gap-x-2">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <h3 className='text-[24px] text-[#2C2C2C] font-normal mt-[20px]'>Alexa Nowan</h3>
                            <p className='text-[16px] text-[#808080] leading-[35px] font-normal mt-[10px] px-[45px]'>I am quite satisfied, because the skills I want or dream of can really be mastered</p>
                        </div>
                    </div>
                </Slider>
                    
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Testimoni