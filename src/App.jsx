import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';
import styles from './App.module.css';
import { useState } from 'react';
import Heading from './components/Heading';

function App() {

  const [calVal, setCalVal] = useState('');
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    }else {
      const newCalVal = calVal + buttonText;
      setCalVal(newCalVal);
    }
  };

  return (
    <center>
      <Heading></Heading>
      <div className={styles.calculator}>
        <Display displayValue={calVal}></Display>
        <ButtonsContainer 
        onButtonClick={onButtonClick}>
        </ButtonsContainer>
      </div>
    </center>
  )
}

export default App;