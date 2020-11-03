//import logo from './logo.svg';
//import './App.css';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './button.css'

function Buttons() {
  return (
    <div display="flex">
      <Button variant="contained" color="primary">1</Button>
      <Button variant="contained" color="primary">2</Button>
      <Button variant="contained" color="primary">3</Button>
      <Button variant="contained" color="primary">4</Button>
      <Button variant="contained" color="primary">5</Button>
      <Button variant="contained" color="primary">6</Button>
      <Button variant="contained" color="primary">7</Button>
      <Button variant="contained" color="primary">8</Button>
      <Button variant="contained" color="primary">9</Button>
      <Button variant="contained" color="primary">0</Button>
      <Button variant="contained" color="primary"><AddIcon /></Button>
      <Button variant="contained" color="primary">-</Button>
      <Button variant="contained" color="primary">*</Button>
      <Button variant="contained" color="primary">/</Button>
    </div>
  );
}

export default Buttons;
