
import React from 'react'
import { Link } from 'react-router-dom'

import CTAButton from '../Components/core/HomePage/CTAButton'
import { FaArrowRight } from "react-icons/fa6";
import HighlighText from '../Components/core/HomePage/HighlighText';
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../Components/core/HomePage/CodeBlocks';
const Home = () => {
  return (
    <div>
       {/*Section 1 */}

       <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white'>
        <Link to={"/signup"}>

            <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all
            duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:ring-richblack-900'>
                    <p>Become an Instructor</p>
                    <FaArrowRight />
                </div>
            </div>
        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your Future with 
            <HighlighText text={"Coding Skills"}/>
        </div>

        <div className='mt-4 w-[90%] text-center text-lg font-bold text-richblack-300' >
            With our online coding courses, you can learn at your own pace, from anywhere in the world of the resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>

        <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"}>
                Learn More
            </CTAButton>
            <CTAButton active={false} linkto={"/login"}>
                Book a Demo
            </CTAButton>
        </div>

        <div className='mx-20 my-12 shadow-blue-200'>
            <video
            muted
            loop
            autoPlay
            >
                <source src={Banner} type='video/mp4'/>

            </video>
        </div>
       </div>

       {/*code section 1*/}
       <div>
        <CodeBlocks
            position={"lg:flex-row"}
            heading={
                <div className='text-4xl font-semibold'>
                    Unloack Your
                    <HighlighText text={"coding potential"}/>
                    with our online courses
                </div>

            }
            subheading={
                "Our courses are design and taught by insdustry experts who have years of exprience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={
                {
                    btnText: "Try it yourself",
                    active: true,
                    linkto: "/signup"
                }
            }
            ctabtn2={
                {
                    btnText: "Learn more",
                    active: false,
                    linkto: "/login"
                }
            }
            CodeBlocks={`<<!DOCTYPE html>\n<html>\nhead>title>Example</title><linkrel="stylesheet"href="style.css">\nhead`}
            codeColor={"text-yellow-25"}

        />
       </div>

       {/*Section 2 */}

       {/*Section 3 */}

       {/*Section 4 */}

    </div>
  )
}

export default Home