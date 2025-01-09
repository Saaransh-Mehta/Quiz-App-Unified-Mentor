import React from 'react'
import {motion} from 'motion/react'
import { Brain , CircleArrowRight} from 'lucide-react'
import AnimatedOrangeBalls from './AnimatedOrange'
import OverlappingBalls from './AnimatedOrange'
import { useNavigate } from 'react-router-dom'
import QuizPanel from './QuizPanel'
const Home = () => {
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate('/quiz')
    }
  return (
    <>
    <div className='grid grid-cols-2'>  
        <div className='h-screen bg-[#3c6d79]'>
            <div className="top m-2 flex gap-3">
                <Brain className='cursor-pointer' width={30} height={30} color='#f9ae65'/>
                <div className='hero-1'>
                    <h1 className='text-2xl font-semibold bebas-neue tracking-wide cursor-pointer text-[#f9ae65]'>HelloQuiz</h1>
                </div>
            </div>
            <motion.div 
            initial={{opacity:0 , y:50}}
            animate={{opacity:1 , y:0 }}
            transition={{duration:2}}
            className='flex justify-start h-[70%] items-center'>
                <div>
                <h1 className='ml-4 bebas-neue text-[#f9ae65] text-6xl'>Are you ready to elevate your Quiz Game ?</h1>
                <motion.button
                onClick={handleNavigate}
                 whileHover={{scale:1.1}}
                className='mt-3 ml-4  bg-[#f9ae65] text-white py-2 px-4 rounded-lg'
                ><span>Get Started <CircleArrowRight/></span></motion.button>
                </div>
                
            </motion.div>
          
        
        </div>
        <div className='h-screen bg-[#E0E2EE]'>
            <div className='top flex justify-center items-center gap-8 bebas-neue'>
                <div>
                    <motion.button
                    initial={{scale:1}}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    className='bg-[#3c6d79] text-white py-2 px-4 rounded mt-3'
                    >
                        Get Started
                    </motion.button>

                </div>
                <div>
                <motion.button
                    initial={{scale:1}}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    className='bg-[#3c6d79] text-white py-2 px-4 rounded mt-3'
                    >
                        Learn More
                    </motion.button>
                </div>
            </div>
            <div className='right-panel'>
                
            </div>
        </div>

    </div>
    <QuizPanel/>
    </>
  )
}

export default Home