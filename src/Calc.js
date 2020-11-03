//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import Display from './Display.js'
import Buttons from './Buttons.js'
import './Calc.css'
import { Paper } from '@material-ui/core';

function Calc() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [selecter, setSelecter] = useState(0);
  const [ans, setAns] = useState(0);

  function callback(string){
	  if( string === "plus" ){
		  setSelecter(1);
	  }else if( string === "equals" ){
		const param  = {
	  	  method: 'POST',
		  headers: {
			"Content-Type": "application/x-www-form-urlencoded"
	     	  },
          	  body: "num1=" + input1 + "&num2=" + input2
	  	}
		fetch('http://localhost:8080/cgi-bin/main.py',param)
		  .then( (response) => response.text() )
		  .then( (text) => {
			  setAns(text)
			  console.log(ans)
		  } )
	  }else{
		if(selecter === 0){
			setInput1(string);
		}else{
			setInput2(string);
		}
	  }
  }
  return (
    <Paper elevation={3} className="Calc">
	  <Display string={ans} />
	  <Buttons callback={callback} />
    </Paper>
  );
}

export default Calc;
