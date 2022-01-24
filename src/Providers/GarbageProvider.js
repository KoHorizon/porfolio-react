import { createContext ,useEffect, useState, useRef} from "react";


export const GarbageContext = createContext()

export const GarbageProvider = (props) => {


    const [changeLangage, setChangeLanguage] = useState(true)





    return ( 
    <GarbageContext.Provider value={{setChangeLanguage,changeLangage}}>
        {props.children}
    </GarbageContext.Provider>
    )
}