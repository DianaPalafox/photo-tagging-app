import { createContext, useState, useEffect } from 'react';

const TimerContext = createContext();

function Provider({children}){
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    
   
    useEffect(() => {
       let timer = setInterval(() => {
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
        return () => clearInterval(timer)

    })

    const valueToShare = {
        seconds, minutes, hours,
    }
    return <TimerContext.Provider value={valueToShare}>{children}</TimerContext.Provider>
}

export { Provider }
export default TimerContext;