 import React, { useState, useEffect } from 'react';
  import { Think } from './Tips';
   import { FaShare } from 'react-icons/fa'; 
   import { Typewriter } from 'react-simple-typewriter';

const Mindcheck = () => {
   const [select, setSelect] = useState(''); 
  const [tips, setTips] = useState([]); 
  const [visibleTips, setVisibleTips] = useState([]);

const handleSend = () => {
   const selectedMood = Think.find((mood) => mood.key === select); 
   if (selectedMood) { setTips(selectedMood.tips); 
    setVisibleTips([]); } };

useEffect(() => { let timers = [];
   if (tips.length > 0) 
    { setVisibleTips([]); tips.forEach((tip, index) => { 
      const timer = setTimeout(() => {
         setVisibleTips((prev) => [...prev, tip]); 
        }, 1200 * index); 
        timers.push(timer); 
      }); } 
      return () => timers.forEach(clearTimeout); 
    }, [tips]);

return ( 
<div className="min-h-screen bg-gradient-to-b from-indigo-100 to-pink-100 flex flex-col items-center justify-center px-4"> 
<h1 className="text-4xl font-bold text-purple-800 mb-4">Mind Mirror</h1> 
<div className="flex gap-2 mb-6"> 
  <select value={select} onChange={(e) => setSelect(e.target.value)} className="p-2 rounded-md border border-purple-300 shadow-sm text-gray-700" > 
    <option value="">State Your Mind </option>
     {Think.map((item) => ( 
      <option key={item.key} value={item.key}> {item.emoji} {item.title} </option>
     ))} 
     </select>
      <button onClick={handleSend} className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-800 shadow-lg"
> <FaShare /> </button> </div>

{visibleTips.length > 0 && (
    <div className="bg-white p-4 rounded-xl shadow-lg w-full max-w-md text-left">
      <h3 className="text-xl font-semibold text-purple-700 mb-2">Here are some tips:</h3>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        {visibleTips.map((tip, index) => (
          <li key={index}>
            <Typewriter
              words={[tip]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={0}
              delaySpeed={0}
            />
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

); };

export default Mindcheck;