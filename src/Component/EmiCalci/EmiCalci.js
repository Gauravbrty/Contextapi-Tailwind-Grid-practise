import { useState, useEffect } from "react";
import "./styles.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

export default function App() {
  const [rate, setrate] = useState();
  const [time, setTime] = useState(0);
  const [amount, setAmount] = useState();
  const [total, setTotal] = useState(0);
  const [interest, TotalIntrest] = useState(0);
  console.log(total, " total");
  function valuetext(value) {
    return `${value}°C`;
  }
  const handleRate = (event) => {
    setrate(event.target.value);
  };
  const handleTime = (event) => {
    setTime(event.target.value);
  };
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  useEffect(() => {
    if (time > 0) {
      const interest = Math.round(amount * (rate * 0.01) / time);
      TotalIntrest(interest);
      const total = Math.round(amount / time + interest);
      setTotal(total);
    } else {
      console.error("Time should be greater than zero");
    }
  }, [rate, time, amount]);
  

  return (
    <div className="App">
      <div className="MainDiv">
        <h2>Emi Calculator</h2>
        <TextField
          onChange={handleAmount}
          placeholder="please enter amount"
          value={amount}
          label="Amount"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Slider
          className="Slider_View"
          defaultValue={0}
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          step={1000}
          value={[amount]}
          marks
          min={0}
          max={100000}
          onChange={handleAmount}
        />
        <TextField
          onChange={handleTime}
          placeholder="please enter time"
          value={time}
          label="Time in months"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
        />
        <Slider
          className="Slider_View"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={6}
          marks
          min={0}
          value={[time]}
          max={200}
          valueLabelDisplay="on"
          onChange={handleTime}
        />
        <TextField
          onChange={handleRate}
          placeholder="please enter rate"
          value={rate}
          label="Rate"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          id="outlined-number"
        />
        <Slider
          className="Slider_View"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={1}
          marks
          min={0}
          value={[rate]}
          max={100}
          valueLabelDisplay="on"
          onChange={handleRate}
        />
        <h1 className="h1_text">Amount Per Month:{total ||0 }</h1>
        <h1 className="h1_text">Total Intrest Monthly: {interest|| 0}</h1>
      </div>
      <div>
        
      </div>
    </div>
  );
}
