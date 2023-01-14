import { useState } from "react";
import { testContext } from "./test-context";


const TestContextProvider = (props) => {
    const [Data,setData] = useState('')
    return <testContext.Provider value={{Data,setData}}>
    {props.children}
    </testContext.Provider>
}

export default TestContextProvider