"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
// import data
import { quiz } from 'utils/quests';

const Quiz = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { title } = quiz;
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const {questions} = quiz;
  const {method,question, answer} = questions[activeQuestion];


  const addNewAnswer = (question, answer) => {
    const newAnswer = {
      question: question,
      answer: answer,
    };
    
    setUserAnswers(prevAnswers => [...prevAnswers, newAnswer]);
    if(pathname.startsWith("survey")){" "}else{router.push("/survey/#questions")}
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(prevQuestion => prevQuestion + 1);
    }else if(activeQuestion == questions.length - 1){
      router.push("/signin")
    }
    setSelectedAnswers([]);
  };
  const selectAnswer = (answer) => {
    if (selectedAnswers.includes(answer)) {
      // If answer is already selected, remove it from the selectedAnswers array
      setSelectedAnswers(selectedAnswers.filter((a) => a !== answer));
    } else {
      // If answer is not selected, add it to the selectedAnswers array
      setSelectedAnswers([...selectedAnswers, answer]);
    }
  };
  const answerList = (method,question,answers) => {
    if (method === 1){
      return(
        <div className='flex flex-col place-items-center max-h-[400px] overflow-auto w-full'>
      {answers.map((answer, index) => (
        <button className='quiz-btn' key={index}
                onClick={() => addNewAnswer(question,answer)}
                >{answer}</button>
      ))
    }
    <button className='quiz-btn' onClick={() => addNewAnswer(question,answer)}>أفضل عدم الاجابة</button>
      </div>
      )
    }
    else if(method === 2){
      return(
        <div className='flex flex-col place-items-center max-h-[400px] overflow-auto w-full'>
      {answers.map((answer, index) => (
        <button className={`${selectedAnswers.includes(answer) ? 'btn-accent text-white' : ''} quiz-btn`} key={index}
                onClick={() => selectAnswer(answer)}
        >{answer}</button>
      ))
    }
    <button className='quiz-btn' onClick={() => selectAnswer(answer)}>أفضل عدم الاجابة</button>
    <button className='quiz-btn btn-accent text-white' onClick={() => addNewAnswer(question,selectedAnswers)}>التالي</button>
      </div>
      )
    }
  }
  useEffect(() => {
    console.log(userAnswers);
    window.localStorage.setItem('ITMAIN_ANSWERS',JSON.stringify(userAnswers))
  }, [userAnswers]);
  return (
    <section className='section bg-overview bg-cover bg-left-top' id="questions">
      <div className='container mx-auto'>
        {/* title */}
        <h2 className='h2 text-5xl mb-10 text-center text-white' data-aos='fade-up' data-aos-delay="200" >
          {title}
        </h2>
        {/* cards */}
        <div className='flex flex-col place-items-center bg-white border border-grey shadow-lg rounded-[12px] p-[40px] duration-300'>
        <h2 className='mb-12 text-4xl text-center'>{question}</h2>
        
        {
          answerList(method,question,answer)
        }
        
        </div>
      </div>
    </section>
  );
};

export default Quiz;
