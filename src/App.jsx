import { useState, useRef } from 'react';

import './style.scss'

function App() {

	const [display, setDisplay] = useState('0');
	const num1 = useRef('');
	const num2 = useRef('');
	const operator = useRef('');

	function getInput(x) {

		if (display === '0') {
			setDisplay('');
		}

		if (typeof x === 'number' && operator.current === '') {
			if (num1.current.length === 7) {
				return false;
			}
			num1.current += x;
			setDisplay(num1.current);
			console.log(num1);
		}

		if (typeof x === 'string') {
			if (num2.current !== '') {
				calculate();
			}
			operator.current = x;
			console.log(operator);
		}

		if (typeof x === 'number' && operator.current !== '') {
			if (num2.current.length === 7) {
				return false;
			}
			setDisplay('');
			num2.current += x;
			setDisplay(num2.current);
			console.log(num2);
		}

	}

	function calculate() {
		if (num1.current !== '' && num2.current !== '') {

			switch (operator.current) {
				case '+': num1.current = parseInt(num1.current) + parseInt(num2.current);
					setDisplay(num1.current);
					num2.current = '';
					break;
				case '-': num1.current = parseInt(num1.current) - parseInt(num2.current);
					setDisplay(num1.current);
					num2.current = '';
					break;
				case '*': num1.current = parseInt(num1.current) * parseInt(num2.current);
					setDisplay(num1.current);
					num2.current = '';
					break;
				case '/': num1.current = parseInt(num1.current) / parseInt(num2.current);
					setDisplay(num1.current);
					num2.current = '';
					break;
				default:
					break;
			}

		}
	}

	function clearDisplay() {
		num1.current = '';
		num2.current = '';
		operator.current = '';
		setDisplay('0');
	}

	return (
		<div className='App'>

			<div className='calculator'>
				<div className='display'>
					<h1>{display}</h1>
				</div>
				<div className='button-grid-container'>
					<button className='btn btn--clear grid-span-3' onClick={() => clearDisplay()}>Clear</button>
					<button className='btn btn--operator' onClick={() => getInput('/')}>/</button>
					<button className='btn' onClick={() => getInput(7)}>7</button>
					<button className='btn' onClick={() => getInput(8)}>8</button>
					<button className='btn' onClick={() => getInput(9)}>9</button>
					<button className='btn btn--operator' onClick={() => getInput('*')}>x</button>
					<button className='btn' onClick={() => getInput(4)}>4</button>
					<button className='btn' onClick={() => getInput(5)}>5</button>
					<button className='btn' onClick={() => getInput(6)}>6</button>
					<button className='btn btn--operator' onClick={() => getInput('-')}>-</button>
					<button className='btn' onClick={() => getInput(1)}>1</button>
					<button className='btn' onClick={() => getInput(2)}>2</button>
					<button className='btn' onClick={() => getInput(3)}>3</button>
					<button className='btn btn--operator' onClick={() => getInput('+')}>+</button>
					<button className='btn grid-span-2' onClick={() => getInput(0)}>0</button>
					<button className='btn'>,</button>
					<button className='btn btn--operator' onClick={() => calculate()}>=</button>
				</div>
			</div>

		</div>
	);
}

export default App;