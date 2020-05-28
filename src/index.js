import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // Hook
  const [ item, setItem ] = useState(1);

  const countUpItem = () => setItem( item + 1 );
  const countDownItem = () => setItem( item - 1 );

  return(
    <div className="App">
      <h2>1,2,3 I Like to count, Count with me!!</h2>
      <h1>{ item }</h1>
      <button onClick={ countUpItem }>UP</button>
      <button onClick={ countDownItem }>DOWN</button>
    </div>
  );
}

ReactDOM.render( <App />, document.getElementById('root'));
