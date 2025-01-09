import React , {useState}from 'react'
import { quizLevelThree } from '../quizData.js'
import { motion } from 'motion/react'
import SuccessModal from './SuccessModal.jsx'
import WrongModal from './WrongModal.jsx'
import CompletionModal from './CompletionModal.jsx'

const LevelThree = () => {
const [currentQuestionIndex,setCurrentQuestionIndex] = useState(0)

    const allQuestion = quizLevelThree[currentQuestionIndex]
    console.log(allQuestion)
    const answer = allQuestion.correctAnswer
    const [userInput ,setUserInput] = useState('')
    console.log(userInput)
    const [selected , setSelected] = useState(false)
    const [successModal,setSuccessModal] = useState(false)
    const [wrongModal,setWrongModal] = useState(false)
    const [completionModal,setCompletionModal] = useState(false)
    const [score,setScore] = useState(0)
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(userInput === answer){
       
            setSuccessModal(true)
            setScore(score + 1)
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }else if (userInput !== answer){
            setWrongModal(true)
            
        }

        if(currentQuestionIndex === quizLevelThree.length - 1){
           
            setCompletionModal(true)
            setCurrentQuestionIndex(0)
            
        }
    }
   
  return (
    <>
    <div className='h-screen bg-[#3c6d79]'>
    <div className='grid grid-cols-1'>
        <div className='flex justify-center items-center text-7xl text-[#f9ae65] bebas-neue'>
            Quiz Panel
        </div>
        <div className='flex justify-center items-center mt-10'>
            <h1 className=' text-5xl text-[#f9ae65] bebas-neue '>Level Two</h1>
        </div>
    </div>
    <div className='grid grid-cols-1 mt-5'>
        <div className='flex justify-center items-center'>
            {
                completionModal && (
                    <CompletionModal
                    score={score}
                    onClose={() => {
                        setScore(0)   
                        setCompletionModal(false)}
                    }
                    />
                )
            }
            
            {
                successModal && (
                    <SuccessModal
                    message={"Correct Answer"}
                    onClose={() => setSuccessModal(false)}
                    />
                )
            }
            {
                wrongModal && (
                    <WrongModal
                    message={"Wrong Answer"}
                    onClose={() => setWrongModal(false)}
                    />
                )
            }
            <div className='h-[400px] w-[700px] border border-[#f9ae65]'>
                <div className='flex justify-center gap-5'>
                    <h1></h1>
                <h1 className=' text-2xl mt-1 text-[#E0E2EE] bebas-neue '>{`Question number ${currentQuestionIndex + 1}`}</h1>
                <h1 className='text-2xl bebas-neue mt-1 text-[#E0E2EE]'>{`Score: ${score}`}</h1>
                </div>
                
            <div className='question mt-4 flex justify-center text-3xl text-[#f9ae65] bebas-neue tracking-wide'>
                <h1>{allQuestion.question}</h1>
            </div>
            <div className='options grid grid-cols-2 gap-3  m-7'>
                {
                    allQuestion.options.map((item,index)=>{
                            return (

                                <motion.button
                                initial={{scale:1}}
                                whileHover={{scale:1.1}}
                                whileTap={{scale:1}}
                                onClick={(()=>{
                                    setUserInput(item)
                                    setSelected(!selected)
                                    return selected ? "bg-[#E0E2EE]" : "bg-[#f9ae65]"
                                })}
                                key={index} className={`flex justify-center bebas-neue text-3xl mt-5 border border-[#f9ae65] p-5 rounded-md text-[#f9ae65] `}>
                                    {item}
                                </motion.button>
                            )
                    })
                }
            </div>
            </div>
       
        </div>

    </div>
  
    <div className='flex justify-center items-center'>
        <button 
        onClick={handleSubmit}
        className='mt-5 bg-[#f9ae65] text-[#E0E2EE] p-3 rounded-md bebas-neue tracking-wide text-xl'>Submit</button>
        </div>

    </div>
        
        </>
  )
}

export default LevelThree