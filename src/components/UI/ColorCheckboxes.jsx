import { FormControlLabel, Checkbox } from '@mui/material';
import { forwardRef } from 'react';

const ColorCheckboxes = forwardRef( function ColorCheckboxes({ id, name, label }, ref) {
    return (
      <>
        <FormControlLabel control={<Checkbox inputRef={ref} id={id} name={name} color="success" />} label={label} />
      </>
    );
  });

export default ColorCheckboxes;