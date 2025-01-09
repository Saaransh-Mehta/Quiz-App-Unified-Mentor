import React, { useState } from 'react'
import { Brain } from 'lucide-react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { nav } from 'motion/react-client'
import { Outlet } from 'react-router-dom'
const Level = () => {
    
    const [levels,setLevels] = useState(null)
    console.log(levels)
  const navigate = useNavigate()
  return (
    <>
    <div className='grid grid-cols-1'>
        <div className='h-screen bg-[#3c6d79]'>
    <div className='grid grid-cols-1'>
    <div className="top m-2 flex gap-3">
                <Brain className='cursor-pointer' width={30} height={30} color='#f9ae65'/>
                <div className='hero-1'>
                    <h1 className='text-2xl font-semibold bebas-neue tracking-wide cursor-pointer text-[#f9ae65]'>HelloQuiz</h1>
                </div>
            </div>
    </div>
       
        <motion.div
        initial={{opacity:0 , y:50}}
        whileInView={{opacity:1 , y:0 }}
        transition={{duration:1.5}}
        className='flex bebas-neue text-[#f9ae65] text-4xl tracking-wide justify-center h-[40%] items-center'>
            Select Levels
        </motion.div>
        <div className='grid grid-cols-3 place-items-center items-center'>
        <motion.div 
        whileHover={{scale:1.1 , rotate:10}}
        whileTap={{scale:1}}
        onClick={()=>{
            
        navigate('/quiz/level1')
        }}
        
        className='h-[200px] w-[200px] border border-[#f9ae65] bg-[#f9ae65] rounded-xl'>
            <div className='flex h-[40%] text-[#E0E2EE] bebas-neue tracking-wide text-2xl items-center justify-center'>
                Level
            </div>
            <div className='flex text-[#E0E2EE] text-7xl bebas-neue justify-center items-center h-[60%]'>
                1
            </div>
        </motion.div>

        <motion.div
        whileHover={{scale:1.1 , rotate:10}}
        whileTap={{scale:1}}
        onClick={()=>
            navigate('/quiz/level2')
        }
        className='h-[200px] w-[200px] border border-[#f9ae65] bg-[#f9ae65] rounded-xl'>
            <div className='flex h-[40%] text-[#E0E2EE] bebas-neue tracking-wide text-2xl items-center justify-center'>
                Level
            </div>
            <div className='flex text-[#E0E2EE] text-7xl bebas-neue justify-center items-center h-[60%]'>
                2
            </div>
        </motion.div>

        <motion.div
        whileHover={{scale:1.1 , rotate:10}}
        whileTap={{scale:1}}
        onClick={(()=>
        navigate('/quiz/level3')
        )}
        className='h-[200px] w-[200px] border border-[#f9ae65] bg-[#f9ae65] rounded-xl'>
            <div className='flex h-[40%] text-[#E0E2EE] bebas-neue tracking-wide text-2xl items-center justify-center'>
                Level
            </div>
            <div className='flex text-[#E0E2EE] text-7xl bebas-neue justify-center items-center h-[60%]'>
                3
            </div>
        </motion.div>

        </div>
        </div>
        <Outlet/>
    </div>
    </>
  )
}

export default Level