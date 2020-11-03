//import logo from './logo.svg';
import './Display.css';

function Display(props) {
  return (
    <div className="Display">
	  <span>{props.string}</span>
    </div>
  );
}

export default Display;
