import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

interface Props {
  sortOptions: any[];
  selectedValue: string;
  onChange: (event: any) => void;
}

const RadioButtonGroup = ({ sortOptions, selectedValue, onChange }: Props) => {
  return (
    <FormControl>
      <RadioGroup
      value={selectedValue}
      onChange={onChange}
      
      >
        {sortOptions.map(({ value, label }) => {
          return (
            <FormControlLabel
              value={value}
              control={<Radio />}
              label={label}
              key={value}
              
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonGroup;
