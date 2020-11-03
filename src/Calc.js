//import logo from './logo.svg';
//import './App.css';
import Display from './Display.js'
import Buttons from './Buttons.js'
import './Calc.css'
import { Paper } from '@material-ui/core';

function Calc() {
  return (
    <Paper elevation={3} className="Calc">
	  <Display />
	  <Buttons />
    </Paper>
  );
}

export default Calc;
