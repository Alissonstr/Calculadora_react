// eslint-disable-next-line no-unused-vars
import React from 'react';
import './style.css';
import { Container, Button, Grid, Typography } from '@mui/material';
import calculatorImage from '../../assets/vetor_calc.png';

const buttonStyles = {
  '<': 'softGrey',
  'c': 'softGrey',
  '+/-': 'softGrey',
  '/': 'yellow',
  '1': 'grey',
  '2': 'grey',
  '3': 'grey',
  'x': 'yellow',
  '4': 'grey',
  '5': 'grey',
  '6': 'grey',
  '+': 'yellow',
  '7': 'grey',
  '8': 'grey',
  '9': 'grey',
  '-': 'yellow',
  '0': 'grey',
  '.': 'grey',
  '=': 'yellow',
};

function getButtonClass(content) {
  return buttonStyles[content] || 'default';
}

// eslint-disable-next-line react/prop-types
function Calculator({ currentNumber, handleButtonClick }) {
  const buttons = [
    ['<', 'c', '+/-', '/'],
    ['1', '2', '3', 'x'],
    ['4', '5', '6', '+'],
    ['7', '8', '9', '-'],
    ['0', '.', '='],
  ];

  return (
    <section>
      <div className="header">
        <div className='inner_header flex'>
          <h1>Bem vindo!</h1>
          <img src={calculatorImage} className="calculatorImage"/>
        </div>

          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="100 0 1000 320" preserveAspectRatio="none">
              <path className="wave1" d="M0,160 Q200,80 400,160 T800,160 T1200,160 T1600,160 T2000,160 T2400,160 T2880,160 V320 H0 V160 Z" />
              <path className="wave2" d="M0,160 Q180,120 360,160 T720,160 T1080,160 T1440,160 T1800,160 T2160,160 T2880,160 V320 H0 V160 Z" />
              <path className="wave3" d="M0,160 Q140,100 360,160 T720,160 T1080,160 T1440,160 T1800,160 T2160,160 T2880,160 V320 H0 V160 Z" />
              <path className="wave4" d="M0,160 Q229,120 360,160 T720,160 T1080,160 T1440,160 T1800,160 T2160,160 T2880,160 V320 H0 V160 Z" />
          </svg>
        
      </div>

      <div className="content flex">
        <Container maxWidth={false} disableGutters className="container calculadora">
          <Typography variant="h4" align="right" id="resultado" gutterBottom>
            {currentNumber || '0'}
          </Typography>

          <Grid container spacing={1}>
            {buttons.map((row, rowIndex) => (
              <Grid container item key={rowIndex} spacing={1}>
                {row.map((buttonContent, index) => (
                  <Grid item xs={buttonContent === '0' ? 6 : 3} key={index}>
                    <Button fullWidth variant="outlined" className={getButtonClass(buttonContent)}onClick={() => handleButtonClick(buttonContent)}>{buttonContent}</Button>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>

        </Container>
      </div>
    </section>
  );
}

export default Calculator;
