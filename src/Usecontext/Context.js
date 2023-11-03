import React,{useState,useContext,createContext} from "react";

const DataInput = createContext()

export function DataInputContext(props){
    const [objectdata , setobjectdata] =
     useState({
        type: '',
        expense: '',
        amount: '',
        date: '',
        description: '',
    })
    const [jsondata, setjsondata] = useState([])

    return(
        <DataInput.Provider value={{objectdata , jsondata ,setobjectdata , setjsondata}}>
            {props.children}
        </DataInput.Provider>
    )
}
 export function UserEntereddata(){
   return useContext(DataInput)
 }