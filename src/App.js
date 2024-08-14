

// import React from 'react';
// import Counter from './count';

// function App() {
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Signin from "./Ex_1";

// function App(){
//     return(
//         <Signin/>
        
//     )
// }
// src/App.js
import React from 'react';
import AddContact from './Event/component';
import ContactList from './Event/contactlist';
import ComponentA from './Ex_1';

function App() {
  return (
    <div className="App">
      <h1>Login from</h1>
      <AddContact />
      <ContactList />
      <ComponentA/>
    </div>
  );
}

export default App;
