import React from 'react';
import './style.css';
import { Container, Button, Grid, Typography } from '@mui/material';

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

function Calculator({ currentNumber, handleButtonClick }) {
  const buttons = [
    ['<', 'c', '+/-', '/'],
    ['1', '2', '3', 'x'],
    ['4', '5', '6', '+'],
    ['7', '8', '9', '-'],
    ['0', '.', '='],
  ];

  return (
    <Container maxWidth="12" disableGutters className="custom_container">
      <Typography variant="h4" align="right" id="resultado" gutterBottom>
        {currentNumber || '0'}
      </Typography>

      <Grid container spacing={1}>
        {buttons.map((row, rowIndex) => (
          <Grid container item key={rowIndex} spacing={1}>
            {row.map((buttonContent, index) => (
              <Grid item xs={buttonContent === '0' ? 6 : 3} key={index}>
                <Button 
                  fullWidth 
                  variant="outlined" 
                  className={getButtonClass(buttonContent)}
                  onClick={() => handleButtonClick(buttonContent)}
                >
                  {buttonContent}
                </Button>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Calculator;
