import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '15ch',
      borderColor: 'white',
    },
  },
}));

export default function Bytes() {
  const classes = useStyles();

  const [b, setB] = useState('0');
  const [kb, setKb] = useState('0');
  const [mb, setMb] = useState('0');
  const [gb, setGb] = useState('0');
  const [tb, setTb] = useState('0');
  const [pb, setPb] = useState('0');
  const [active, setActive] = useState('b');

  const calculate = () => {
    console.log("Calculating...");
  }



  return (
    <form className={classes.root} submit={calculate}>
      <h2> Byte (data) conversion </h2>
      <div>
        <TextField
          id="Bytes"
          label="Bytes"
          type="number"
          defaultValue=""
          placeholder="0"
          variant="outlined"
        /><TextField
          id="Kilobytes"
          label="Kilobytes"
          type="number"
          defaultValue=""
          placeholder="0"
          variant="outlined"
        />
        <TextField
          id="Megabytes"
          label="Megabytes"
          type="number"
          defaultValue=""
          placeholder="0"
          variant="outlined"
        />
        <TextField
          id="Gigabytes"
          label="Gigabytes"
          type="number"
          defaultValue=""
          placeholder="0"
          variant="outlined"
        />
        <TextField
          id="Terabytes"
          label="Terabytes"
          type="number"
          defaultValue=""
          placeholder="0"
          variant="outlined"
        />
        <TextField
          id="Petabytes"
          label="Petabytes"
          type="number"
          defaultValue=""
          placeholder="0"
          variant="outlined"
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SwapHorizontalCircleIcon />}
        onClick={() => calculate()}
      > Convert </Button>
    </form>
  );
}
