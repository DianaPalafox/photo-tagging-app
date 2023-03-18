import { createContext, useState, useEffect } from 'react';

const TimerContext = createContext();

function Provider({children}){
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [isActive, setIsActive] = useState(false)

    function reset() {
        setSeconds(0);
        setMinutes(0)
        setSeconds(0)
        setIsActive(false);
      }

    useEffect(() => {
        let timer = null 
        if(isActive) {
            timer = setInterval(() => {
                setSeconds(seconds + 1)
                if(seconds=== 59) {
                    setMinutes(minutes+1)
                    setSeconds(0)
                }else if (minutes === 59){
                    setHours(hours+1)
                    setMinutes(0)
                    setSeconds(0)
                }
            }, 1000)
        }else if(!isActive && seconds !== 0){
            clearInterval(timer)
            
        }
        return () => clearInterval(timer)
    })

    const valueToShare = {
        seconds, minutes, hours, setIsActive, reset
    }
    return <TimerContext.Provider value={valueToShare}>{children}</TimerContext.Provider>
}

export { Provider }
export default TimerContext;