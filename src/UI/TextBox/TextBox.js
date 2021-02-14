import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
export default function TextBox(props){
    return (
            <Grid item xs={props.xs} sm={props.sm}>
              <TextField
                autoComplete={props.auto}
                name={props.name}
                variant="outlined"
                required
                fullWidth
                id={props.id}
                label={props.label}
                autoFocus={props.autofocus}
              />
        </Grid>
        
    )
}