import React from 'react'
import Container from './Container'
import productImg1 from "../assets/product1.png"
import productImg2 from "../assets/product2.png"
import productCardImg1 from "../assets/product-card1.png"
import productCardImg2 from "../assets/product-card2.png"
import productCardImg3 from "../assets/product-card3.png"
import productPlay1 from "../assets/product-play1.png"
import ItManagerImg from "../assets/IT-Manager.png"
import DataScienceImg from "../assets/Data-Science.png"
import ProgramerImg from "../assets/Programer.png"
import { FiUser } from "react-icons/fi";
import Slider from "react-slick";
import { HiOutlineArrowRight, HiOutlineArrowLeft  } from "react-icons/hi";






function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div onClick={onClick} className='flex justify-center items-center absolute top-[38%] right-[-14px] lg:h-[67px] lg:w-[67px] rounded-full bg-[#F5F5F5]'> <HiOutlineArrowRight className='text-[20px] text-[#0C111F] hover:text-white h-[54px] w-[54px] rounded-full hover:bg-[#245D51] p-3 bg-[#FFFFFF] duration-500 ease-in-out cursor-pointer'/> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <div onClick={onClick} className='flex justify-center items-center absolute top-[38%] left-[-27px] lg:h-[67px] lg:w-[67px] rounded-full bg-[#F5F5F5] z-40'> <HiOutlineArrowLeft className='text-[20px] text-[#0C111F] hover:text-white h-[54px] w-[54px] rounded-full hover:bg-[#245D51] p-3 bg-[#FFFFFF] duration-500 ease-in-out cursor-pointer'/> </div>
    );
  }



const settings = {
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

const Product = () => {
  return (
    <section id='' className='py-[75px] bg-[#245D51]'>
        <Container>
            <div className="">
                <div className=" text-center relative">
                    <h2 className='lg:text-[36px] text-[18px] text-[#FFFFFF] font-semibold '>Popular courses of the week</h2>
                    <p className='lg:text-[16px] text-[12px] text-[#FFFFFF99] font-normal lg:leading-[35px] leading-[30px] lg:w-[30%] w-[95%] mx-auto mt-[10px]'>List of the most popular lists that are often studied by our members</p>
                    <img src={productImg1} alt="product1" className=' absolute lg:top-[70px] lg:left-[176px] -top-14 left-0' />
                    <img src={productImg2} alt="product2" className=' absolute lg:top-[40px] lg:right-[188px] -top-4 right-0' />
                </div>

                <div className="mt-[50px]">
                <Slider {...settings}>
                    <div className=" lg:!w-[97%]">
                        <div className="relative">
                            <img src={productCardImg1} alt="product-card1" className='w-full'/>
                            <img src={productPlay1} alt="product-play1" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'/>
                        </div>

                        <div className="bg-white rounded-bl-[15px] rounded-br-[15px]  lg:px-0">
                        <div className=" lg:ms-[27px] ">
                            <div className=" ">
                                <h3 className='lg:text-[24px] text-[14px] text-[#2C2C2C] font-semibold px-12 lg:px-0 pt-[27px]'>Basics of learning team management</h3>
                            </div>
                            <div className=" flex mt-5 lg:justify-start justify-around">
                                <div className="flex items-center">
                                    <div className=""><img src={ItManagerImg} alt="IT-Manager" /></div>
                                    <div className="">
                                        <h2 className='text-[14px] text-[#2C2C2C] font-medium ms-[10px]'>Jone Owel</h2>
                                        <h3 className='text-[10px] text-[#808080] font-normal ms-[10px]'>IT Manager</h3>
                                    </div>
                                </div>
                                <div className="flex items-center lg:ms-[90px]">
                                    <FiUser className='text-[35px] text-[#245D51]'/>
                                    <div className="ms-3">
                                        <h3 className='text-[16px] text-[#2C2C2C] font-medium'>120</h3>
                                        <h4 className='text-[10px] text-[#808080] font-medium'>Participant</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="flex mt-[41px] py-[19px] bg-[#FAFAFA] rounded-[15px]">
                                <div className="ms-[31px] flex items-center">
                                    <button className='text-[12px] text-[#FFFFFF] font-semibold leading-[30px] py-[12px] px-[25px] rounded-[10px] bg-[#245D51]'>Buy Now</button>
                                    <p className='lg:text-[24px] text-[16px] text-[#2C2C2C] font-semibold lg:ms-[100px] ms-[70px]'>$120 <span className='lg:text-[12px] text-[8px] text-[#808080] font-normal leading-[30px]'>/25 Video</span></p>
                                </div>
                        </div>
                        </div>
                    </div> 
                    <div className=" lg:!w-[97%]">
                        <div className="relative">
                            <img src={productCardImg2} alt="product-card2" className='w-full'/>
                            <img src={productPlay1} alt="product-play1" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'/>
                        </div>

                        <div className="bg-white rounded-bl-[15px] rounded-br-[15px]  lg:px-0">
                        <div className=" lg:ms-[27px] ">
                            <div className=" ">
                                <h3 className='lg:text-[24px] text-[14px] text-[#2C2C2C] font-semibold px-16 lg:px-0 pt-[27px]'>Learn basic database structure</h3>
                            </div>
                            <div className=" flex mt-5 lg:justify-start justify-around">
                                <div className="flex items-center">
                                    <div className=""><img src={DataScienceImg} alt="Data-Science" /></div>
                                    <div className="">
                                        <h2 className='text-[14px] text-[#2C2C2C] font-medium ms-[10px]'>Roynaldo Jr</h2>
                                        <h3 className='text-[10px] text-[#808080] font-normal ms-[10px]'>Data Science</h3>
                                    </div>
                                </div>
                                <div className="flex items-center lg:ms-[90px]">
                                    <FiUser className='text-[35px] text-[#245D51]'/>
                                    <div className="ms-3">
                                        <h3 className='text-[16px] text-[#2C2C2C] font-medium'>55</h3>
                                        <h4 className='text-[10px] text-[#808080] font-medium'>Participant</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="flex mt-[41px] py-[19px] bg-[#FAFAFA] rounded-[15px]">
                                <div className="ms-[31px] flex items-center">
                                    <button className='text-[12px] text-[#FFFFFF] font-semibold leading-[30px] py-[12px] px-[25px] rounded-[10px] bg-[#245D51]'>Buy Now</button>
                                    <p className='lg:text-[24px] text-[16px] text-[#2C2C2C] font-semibold lg:ms-[100px] ms-[70px]'>$180 <span className='lg:text-[12px] text-[8px] text-[#808080] font-normal leading-[30px]'>/20 Video</span></p>
                                </div>
                        </div>
                        </div>
                    </div> 
                    <div className=" lg:!w-[97%]">
                        <div className="relative">
                            <img src={productCardImg3} alt="product-card3" className='w-full'/>
                            <img src={productPlay1} alt="product-play1" className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'/>
                        </div>

                        <div className="bg-white rounded-bl-[15px] rounded-br-[15px]  lg:px-0">
                        <div className=" lg:ms-[27px] ">
                            <div className=" ">
                                <h3 className='lg:text-[24px] text-[14px] text-[#2C2C2C] font-semibold px-12 lg:px-0 pt-[27px]'>Create dynamic website with basic php</h3>
                            </div>
                            <div className=" flex mt-5 lg:justify-start justify-around">
                                <div className="flex items-center">
                                    <div className=""><img src={ProgramerImg} alt="Programer" /></div>
                                    <div className="">
                                        <h2 className='text-[14px] text-[#2C2C2C] font-medium ms-[10px]'>Markus Low</h2>
                                        <h3 className='text-[10px] text-[#808080] font-normal ms-[10px]'>Programer</h3>
                                    </div>
                                </div>
                                <div className="flex items-center lg:ms-[90px]">
                                    <FiUser className='text-[35px] text-[#245D51]'/>
                                    <div className="ms-3">
                                        <h3 className='text-[16px] text-[#2C2C2C] font-medium'>98</h3>
                                        <h4 className='text-[10px] text-[#808080] font-medium'>Participant</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        <div className="flex mt-[41px] py-[19px] bg-[#FAFAFA] rounded-[15px]">
                                <div className="ms-[31px] flex items-center">
                                    <button className='text-[12px] text-[#FFFFFF] font-semibold leading-[30px] py-[12px] px-[25px] rounded-[10px] bg-[#245D51]'>Buy Now</button>
                                    <p className='lg:text-[24px] text-[16px] text-[#2C2C2C] font-semibold lg:ms-[100px] ms-[70px]'>$135 <span className='lg:text-[12px] text-[8px] text-[#808080] font-normal leading-[30px]'>/25 Video</span></p>
                                </div>
                        </div>
                        </div>
                    </div> 

                    
                </Slider>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Product