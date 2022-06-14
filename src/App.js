import React, { useEffect, useState } from "react";
import Clock  from "./Clock";
function App() {
  const [showClock, setShowClock] = useState(true);
  const [time ,setTime]=useState(new Date())
useEffect(()=>{
const timer=setInterval(() => {
  setTime(new Date())
}, 1000);
return ()=>{
  clearInterval(timer)
}

},[])

return (
  <div>
    {showClock ? <Clock /> : null}
    <button onClick={() => setShowClock(false)}>Toggle Clock</button>
{time.toString()}
  </div>
);
}

export default App;

