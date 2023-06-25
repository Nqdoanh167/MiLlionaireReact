/** @format */

import {useRef} from 'react';

export default function Start({setUsername}) {
   const inputRef = useRef();
   const handleClick = () => {
      setUsername(inputRef.current.value);
   };
   return (
      <div className='start'>
         <input type='text' placeholder='enter your name' ref={inputRef} />
         <button onClick={handleClick}>Start</button>
      </div>
   );
}
