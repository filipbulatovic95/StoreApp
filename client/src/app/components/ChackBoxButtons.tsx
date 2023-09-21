import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { useState } from 'react'

interface Props{
    items: string[];
    checked?: string[];
    onChange: (items : string[]) => void; 
}

const ChackBoxButtons = ({items, checked, onChange} : Props) => {
   const [checkedList, setCheckedList] = useState(checked || []);
 

   function handleChecked(value: string) {
    const currentIndex = checkedList.findIndex(item => item === value);
    let newChecked : string[] = [];
    if (currentIndex === -1) newChecked =  [...checkedList, value];
    else newChecked = checkedList.filter(item => item !== value);
    setCheckedList(newChecked);
    onChange( newChecked);

   }

  return (
    <FormGroup>
            {items.map((item) => (
              <FormControlLabel
                control={<Checkbox 
                    checked={checkedList.indexOf(item) !== -1}
                    onClick={() => handleChecked(item)}
                    />}
                label={item}
                key={item}
              />
            ))}
            
          </FormGroup>
  )
}

export default ChackBoxButtons