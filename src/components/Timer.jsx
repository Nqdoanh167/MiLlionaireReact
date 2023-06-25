/** @format */

import {useEffect, useState} from 'react';

export default function Timer({setStop, questionNumber}) {
   const [timer, setTimer] = useState(30);
   // dem nguoc tg
   useEffect(() => {
      if (timer === 0) return setStop(true);
      const interval = setInterval(() => {
         setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
   }, [setStop, timer]);
   // reset sau moi cau hoi
   useEffect(() => {
      setTimer(30);
   }, [questionNumber]);

   return timer;
}
