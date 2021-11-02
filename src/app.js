import React from 'react';
import ReactDOM from 'react-dom';

// ES6 Test
class Test {
    printTest() {
        let v = 'TEST!';
        console.log(v);
    }
}
const a = new Test();
a.printTest();

// React JSX Test
function jsx() {
    return (<div className="container"> Simple JSX! 
      <p> ONE <span> HERE </span> </p>
      <h4> TWO </h4>
    </div>);
  }

ReactDOM.render(jsx(), document.getElementById('main'));