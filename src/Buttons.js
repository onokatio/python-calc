//import logo from './logo.svg';
//import './App.css';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import './button.css'

function Buttons(props) {
  function makeClickHandler(string){
    return () => {
      props.callback(string);
    };
  };
  return (
    <div className="Buttons">
        <Button id="button-1" onClick={makeClickHandler("1")} variant="contained" color="primary">1</Button>
        <Button id="button-2" onClick={makeClickHandler("2")} variant="contained" color="primary">2</Button>
        <Button id="button-3" onClick={makeClickHandler("3")} variant="contained" color="primary">3</Button>
        <Button id="button-4" onClick={makeClickHandler("4")} variant="contained" color="primary">4</Button>
        <Button id="button-5" onClick={makeClickHandler("5")} variant="contained" color="primary">5</Button>
        <Button id="button-6" onClick={makeClickHandler("6")} variant="contained" color="primary">6</Button>
        <Button id="button-7" onClick={makeClickHandler("7")} variant="contained" color="primary">7</Button>
        <Button id="button-8" onClick={makeClickHandler("8")} variant="contained" color="primary">8</Button>
        <Button id="button-9" onClick={makeClickHandler("9")} variant="contained" color="primary">9</Button>
        <Button id="button-0" onClick={makeClickHandler("0")} variant="contained" color="primary">0</Button>
        <Button id="button-000"  onClick={makeClickHandler("000")} variant="contained" color="primary">000</Button>
        <Button id="button-dot"  onClick={makeClickHandler("dot")} variant="contained" color="primary">.</Button>
        <Button id="button-plus"  onClick={makeClickHandler("plus")} variant="contained" color="primary"><Icon className="fa fa-plus" /></Button>
        <Button id="button-minus"  onClick={makeClickHandler("minus")} variant="contained" color="primary"><Icon className="fa fa-minus" /></Button>
        <Button id="button-times"  onClick={makeClickHandler("times")} variant="contained" color="primary"><Icon className="fa fa-times" /></Button>
        <Button id="button-divide"  onClick={makeClickHandler("divide")} variant="contained" color="primary"><Icon className="fa fa-divide" /></Button>
        <Button id="button-percentage"  onClick={makeClickHandler("percentage")} variant="contained" color="primary"><Icon className="fa fa-percentage" /></Button>
        <Button id="button-ac"  onClick={makeClickHandler("ac")} variant="contained" color="secondary">AC</Button>
        <Button id="button-equals"  onClick={makeClickHandler("equals")} variant="contained" color="primary"><Icon className="fa fa-equals" /></Button>
    </div>
  );
}

export default Buttons;
