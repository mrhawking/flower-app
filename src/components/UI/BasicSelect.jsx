import { styled } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function BasicSelect({ name, id, onChange, sortType }) {

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const StyledSelect = styled(Select)(() => ({
    "&.MuiOutlinedInput-root": {
      backgroundColor: "#fff", 
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#4bb45e",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#4bb45e", 
      },
    },
    "& .MuiSelect-icon": {
      color: "#4bb45e",
    }
  }));

  const StyledMenuItem = styled(MenuItem)(() => ({
    backgroundColor: "#fff",
    color: "black",
    "&:hover": {
      backgroundColor: "#4bb45e",
      color: "#fff",
    },
    "&.Mui-selected": {
      backgroundColor: "#4bb45e94",
      "&:hover": {
        backgroundColor: "#4bb45e",
        color: "#fff"
      }
    },
    "&.Mui-selected.Mui-focusVisible": {
      backgroundColor: "#4bb45e94",
      "&:hover": {
        backgroundColor: "#4bb45e",
        color: "#fff"
      }
    }
  }));


  // MuiButtonBase-root-MuiMenuItem-root.Mui-selected

  const StyledLabel = styled((props) => <InputLabel {...props} />)(
    () => ({
      color: "#4bb45e",
      fontWeight: "normal",

      "&.Mui-focused": {
        color: "#4bb45e"
      }
    })
  );

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <StyledLabel id="sort-label">Сортировка цены</StyledLabel>
        <StyledSelect
          MenuProps={{
            disableScrollLock: true
          }}
          labelId="sort-label"
          id={id}
          name={name}
          value={sortType}
          label="Сортировка цены"
          onChange={handleChange}
        >
          <StyledMenuItem value="default">По умолчанию</StyledMenuItem>
          <StyledMenuItem value="ascending">По возрастанию</StyledMenuItem>
          <StyledMenuItem value="descending">По убыванию</StyledMenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  );
}


