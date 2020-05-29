import React, { useState } from 'react';
import ReactDOM from 'react-dom';


// Custom Hook
const useInput = ( initialValue, validator ) => {

  // Hook
  const [ value, setValue ] = useState( initialValue );

  // Handler
  const onChange = event => {
    
    // Value
    const {
      target: { value }
    } = event;

    // Validation
    let willUpdate = true;
    if( typeof validator === "function"){
      willUpdate = validator( value );
    }

    // Set (update)
    if( willUpdate ){
      setValue(value);
    }

  }

  // Return value (object)
  return { value, onChange }

};

const App = () => {
  
  // Use Custom Hook
  const maxLen = value => value.length <= 10;
  const name = useInput('Mr. ', maxLen);

  // Render
  return(
    <div className="App">
      <h2>1,2,3 I Like to count, Count with me!!</h2>
      <input type="text" {...name}/>
      {/* <input type="text" value={ name.value } onChange={ name.onChange }/> */}
    </div>
  );
}

ReactDOM.render( <App />, document.getElementById('root'));
