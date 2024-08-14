import React, {useContext} from 'react'; 
import {SendContext} from './Ex_1';

function ComponentD(){

const Receive = useContext(SendContext);

return( 
    <div className="box"> 
    <h1>ComponentD</h1>    
    <h2>{`Bye ${Receive}`}</h2> 
    </div> 
);

}

export default ComponentD;