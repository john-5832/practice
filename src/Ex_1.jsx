import React, {useState, createContext} from 'react'; 
import ComponentB from './Ex_2';

export const SendContext = createContext();

function ComponentA(){

const [user, setUser] = useState("its kannan");

return(

<div className="box"> 
    <h1>ComponentA</h1> 
    <h2>{`Hello ${user}`} </h2> 
       <SendContext.Provider value={user}> 
          <ComponentB/>
       </SendContext.Provider> 
        </div> 
        );
}
export default ComponentA;