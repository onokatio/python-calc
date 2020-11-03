//import logo from './logo.svg';
//import './App.css';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import './button.css'

function Buttons() {
  return (
    <div className="Buttons">
        <Button id="button-1" variant="contained" color="primary">1</Button>
        <Button id="button-2" variant="contained" color="primary">2</Button>
        <Button id="button-3" variant="contained" color="primary">3</Button>
        <Button id="button-4" variant="contained" color="primary">4</Button>
        <Button id="button-5" variant="contained" color="primary">5</Button>
        <Button id="button-6" variant="contained" color="primary">6</Button>
        <Button id="button-7" variant="contained" color="primary">7</Button>
        <Button id="button-8" variant="contained" color="primary">8</Button>
        <Button id="button-9" variant="contained" color="primary">9</Button>
        <Button id="button-0" variant="contained" color="primary">0</Button>
        <Button id="button-plus" variant="contained" color="primary"><Icon className="fa fa-plus" /></Button>
        <Button id="button-minus" variant="contained" color="primary"><Icon className="fa fa-minus" /></Button>
        <Button id="button-times" variant="contained" color="primary"><Icon className="fa fa-times" /></Button>
        <Button id="button-devide" variant="contained" color="primary"><Icon className="fa fa-divide" /></Button>
    </div>
  );
}

export default Buttons;
