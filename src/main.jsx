import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  
      <App />
  ,
)


function bar() {
  console.log(this.data)
}

let object1 = {
  data: 'some info',
  foo: function() {
    console.log(this)
  }
};

bar.call(object1)