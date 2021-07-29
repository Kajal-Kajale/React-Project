import React, { Component } from 'react'
import { Box, Typography } from '@material-ui/core';
import './App.css';
import ChooseCurrency from './ChooseCurrency';

class App extends Component {

  constructor() {
    super()
    this.state = {
      eur: '',
      gbp: '',
      usd: ''
    }
  }

  async componentDidMount () {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
  
      this.setState (
          {
            eur: data.bpi.EUR.rate,
            gbp: data.bpi.GBP.rate,
            usd: data.bpi.USD.rate
          }
        )
  }

  render() {
    return ( 
      <Box className='App-header'>
        <Typography variant='h3' align='center' style={{padding: '10px'}}>Bitcoin Tracker</Typography>
        <ChooseCurrency eur={this.state.eur} gbp={this.state.gbp} usd={this.state.usd} />
      </Box>
    );
  }
}
export default App;
