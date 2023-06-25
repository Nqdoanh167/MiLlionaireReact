/** @format */

import React, {useEffect, useState} from 'react';
import useSound from 'use-sound';
import play from '../sounds/play.mp3';
import correct from '../sounds/correct.mp3';
import wrong from '../sounds/wrong.mp3';

export default function Trivia({data, setStop, questionNumber, setQuestionNumber}) {
   const [question, setQuestion] = useState(null);
   const [selectAnswer, setSelectAnswer] = useState(null);
   const [classname, setClassname] = useState('');
   const [letsPlay] = useSound(play);
   const [correctAnswer] = useSound(correct);
   const [wrongtAnswer] = useSound(wrong);
   // am thanh khi choi
   useEffect(() => {
      letsPlay();
   }, [letsPlay]);

   useEffect(() => {
      //gan question = 1 obj trong data
      setQuestion(data[questionNumber - 1]);
   }, [data, questionNumber]);

   const delay = (duration, callback) => {
      setTimeout(() => {
         callback();
      }, duration);
   };
   const handleClick = (a) => {
      setSelectAnswer(a);
      setClassname(' answer active');
      delay(3000, () => setClassname(a.correct ? 'answer correct' : 'answer wrong'));
      delay(5000, () => {
         if (a.correct) {
            //am thanh khi dung
            correctAnswer();
            // chay cau hoi tiep theo
            delay(1000, () => {
               setQuestionNumber((prev) => prev + 1);

               //khoi tao lai selectAnswer
               setSelectAnswer(null);
            });
         } else {
            //am thanh khi sai
            wrongtAnswer();
            // dung tro choi
            delay(1000, () => {
               setStop(true);
            });
         }
      });
   };
   return (
      <div className='trivial'>
         <div className='question'>{question?.question}</div>
         <div className='answers'>
            {question?.answers.map((a) => (
               <div className={selectAnswer === a ? classname : 'answer'} onClick={() => handleClick(a)}>
                  {a.text}
               </div>
            ))}
         </div>
      </div>
   );
}
