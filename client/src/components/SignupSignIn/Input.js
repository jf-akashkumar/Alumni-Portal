import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";

import { Visibility } from "@mui/icons-material";
// import Visibility from '@material-ui/icons/Visibility';
import { VisibilityOff } from "@mui/icons-material";

const Input = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
  required,
  inputProps,
}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required={required}
      fullWidth
      label={label}
      autoFocus={autoFocus}
      inputProps={inputProps}
      type={type}
      InputProps={
        name === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  </Grid>
);

export default Input;
