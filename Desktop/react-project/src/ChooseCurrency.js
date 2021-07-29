import React, {useState} from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 310,
    },
    
}));

const ChooseCurrency = (props) => {

    const {eur, gbp, usd} = props
    const [value, setValue] = useState('')

    const handleChange = (event) => {
    setValue( event.target.value ) 
  }

   
    const classes = useStyles();
    return(
        <div>
            <Grid lg={12}>
                
                <Typography align='center' variant='h6' style={{color: 'crimson'}}>{value}</Typography>
            </Grid>
            <Grid lg={12}>
                <FormControl
                variant="outlined"
                className={classes.formControl}
                >
                    <InputLabel id="demo-simple-select-outlined-label">Select Currency</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={value}
                    onChange={handleChange}
                    label="Select Currency"
                    >
                    <MenuItem value={`Euro: ${eur}`}>Euro</MenuItem>
                    <MenuItem value={`Pound: ${gbp}`}>Pound</MenuItem>
                    <MenuItem value={`Dollar: ${usd}`}>Dollar</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            
        </div>
        
    )
}
export default ChooseCurrency