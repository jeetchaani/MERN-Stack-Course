import React, { useState } from 'react'

const arrayList = () => {
    return [];
}


export default function Main() {
    const [ list, setList ] = useState(arrayList());
    const [ inputData, setinputData ] = useState("");
      const addData = () => {
          if(inputData!==""){
            setList([...list,inputData]);
            setinputData("");
          }
      }
      
      const deleteData = (name) => {
                  const updateList = list.filter((item) => {
                    return item!==name;
                  });
                  setList(updateList);
      }
  return (
    <div>
           <input 
           type='text' 
           value={inputData}
           onChange={(event) => setinputData(event.target.value)}
           placeholder='Enter task..' />
           <button onClick={addData}>Add</button>
              <ul> 
                   {
                       list.map((item,index) => {
                          return(
                            <li key={index}>
                                { item } <span onClick={() => deleteData(item)}>Delete</span>
                            </li>
                          )
                       })
                   }
              </ul>
    </div>
  )
}
