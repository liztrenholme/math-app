/* eslint-disable no-console */
import React, { useState } from 'react';
import './main.css';
// import Display from '../display/index';
import Input from '../Input/index';
import InfoIconCircle from './assets/infoicon.png';
import {
  adding, subtracting, multiplying, dividing, randomNumberGenerator, isNumber
} from '../modules/index.js';
import json from '../../../package.json';
import CorrectModal from '../CorrectModal';

const Main = (props) => {
  const [mode, setMode] = useState('Choose a mode:');
  const [mathFunction, setMathFunction] = useState('Choose math function type:')
  const [num1, setNum1] = useState(null)
  const [num2, setNum2] = useState(null)
  const [answer, setAnswer] = useState('')
  const [correct, setCorrect] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)

  const handleChangeInput = (e) => {
      const numCheck = isNumber(e.target.value)
    if (numCheck || e.target.value === '') {
      e.preventDefault();
      setAnswer(e.target.value)
    }
  }

  const handleSetMode = (newMode) => {
    setMode(newMode);
    setAnswer('')
    if (mathFunction !== 'Choose math function type:') {
      setNum1(randomNumberGenerator(mode))
      setNum2(randomNumberGenerator(mode))
    }
  }

  const handleSetMathFunction = (newFunction) => {
    setMathFunction(newFunction)
    setAnswer('')
    if (mode !== 'Choose a mode:') {
      setNum1(randomNumberGenerator(mode))
      setNum2(randomNumberGenerator(mode))
    }
  }

  const handleAdd = (a, b, c) => adding(a, b, c);

  const handleSubtract = (a, b) => subtracting(a, b);

  const handleMultiply = (a, b) => multiplying(a, b);

  const handleDivide = (a, b) => dividing(a, b);

  const handleCompareAnswer = () => {
    if (mathFunction === 'addition') {
      const correctAnswer = handleAdd(num1, num2)
      if (correctAnswer === Number(answer)) {
        setCorrect(true)
        setCorrectCount(correctCount + 1)
      } else {
        setCorrect(false)
      }
    }
    if (mathFunction === 'subtraction') {
      const correctAnswer = handleSubtract(num1, num2)
      if (correctAnswer === Number(answer)) {
        setCorrect(true)
        setCorrectCount(correctCount + 1)
      } else {
        setCorrect(false)
      }
    }
    if (mathFunction === 'multiplication') {
      const correctAnswer = handleMultiply(num1, num2)
      if (correctAnswer === Number(answer)) {
        setCorrect(true)
        setCorrectCount(correctCount + 1)
      } else {
        setCorrect(false)
      }
    }
    if (mathFunction === 'division') {
      const correctAnswer = handleDivide(num1, num2)
      if (correctAnswer === Number(answer)) {
        setCorrect(true)
        setCorrectCount(correctCount + 1)
      } else {
        setCorrect(false)
      }
    }
    setAnswer('')
  }

  const handleReset = () => {
    setAnswer('')
    setCorrect(null)
    setNum1(randomNumberGenerator(mode))
    setNum2(randomNumberGenerator(mode))
  }

  console.log('random', num1, num2)
  console.log('correct??', correct)

  return (
    <div className='main-container'>
      {/* {correct ? 
            <div className='modal-overlay' />
            : null} */}
      {correct ? <CorrectModal reset={handleReset} /> : null}
      <h1>Math Game</h1>
      <div>
        <h2>You've gotten {correctCount} correct so far!</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '5em' }}>
        <div className='settings-box'>
          <div>
            <h3>{mode}</h3>
            <div className='buttons-box'>
              <div className={`settingBtn ${mode === 'easy' ? 'active' : 'inactive'}`} onClick={() => handleSetMode('easy')}>easy</div>
              <div className={`settingBtn ${mode === 'medium' ? 'active' : 'inactive'}`} onClick={() => handleSetMode('medium')}>medium</div>
              <div className={`settingBtn ${mode === 'hard' ? 'active' : 'inactive'}`} onClick={() => handleSetMode('hard')}>hard</div>
              <div className={`settingBtn ${mode === 'expert' ? 'active' : 'inactive'}`} onClick={() => handleSetMode('expert')}>expert</div>
            </div>
          </div>
          <div>
            <h3>{mathFunction}</h3>
            <div className='buttons-box'>
              <div className={`settingBtn ${mathFunction === 'addition' ? 'active' : 'inactive'}`} onClick={() => handleSetMathFunction('addition')}>+</div>
              <div className={`settingBtn ${mathFunction === 'subtraction' ? 'active' : 'inactive'}`} onClick={() => handleSetMathFunction('subtraction')}>-</div>
              <div className={`settingBtn ${mathFunction === 'multiplication' ? 'active' : 'inactive'}`} onClick={() => handleSetMathFunction('multiplication')}>x</div>
              <div className={`settingBtn ${mathFunction === 'division' ? 'active' : 'inactive'}`} onClick={() => handleSetMathFunction('division')}>/</div>
            </div>
          </div>
        </div>
        <div className='mathing-area'>
          {num2 !== null ? num1 > num2 ? num1 : num2 : '?'}
          {mathFunction === 'addition' ? ' + ' : mathFunction === 'subtraction' ? ' - ' : mathFunction === 'multiplication' ? ' x ' : mathFunction === 'division' ? ' / ' : ' ? '}
          {num2 !== null ? num2 < num1 ? num2 : num1 : '?'} =
          <Input answer={answer} handleChangeInput={handleChangeInput} disabled={!mode || !mathFunction ? true : false} />
          <div className={answer && answer.length ? 'submitBtn' : 'disabled'} onClick={handleCompareAnswer}>Submit</div>
        </div>
      </div>
      {json.version}
    </div>
  )
}


export default Main;