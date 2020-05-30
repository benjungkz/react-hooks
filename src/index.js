import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Data
const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];

// Custome Hook
const useTabs = ( initialTab, allTabs ) => {
  
  // Hook
  const [ currentIndex, setCurrentIndex ] = useState(initialTab);

  // Exception
  if( !allTabs || !Array.isArray(allTabs)){
    return;
  }

  return [
    allTabs[currentIndex],
    setCurrentIndex
  ];
}

const App = () => {
  
  // Use Custom Hook
  const [ currentItem, setCurrentItemIndex ] = useTabs( 0, content );

  // Render
  return(
    <div className="App">
      {content.map( ( section, index ) => (
        <button onClick={ () => setCurrentItemIndex(index) }>{ section.tab }</button>
      ))}
      <div>
        <p>
          { currentItem.content }
        </p>
      </div>
    </div>
  );
}

ReactDOM.render( <App />, document.getElementById('root'));
