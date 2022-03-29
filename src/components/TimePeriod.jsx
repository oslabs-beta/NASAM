import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { timeChange } from '../features/slices/timePeriodSlice'
import { useDispatch } from 'react-redux';

///MATERIAL UI
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Timelapse, TimelineOutlined } from '@mui/icons-material';

export const TimePeriod = () => {
	const dispatch = useDispatch();

	const timePeriod = useSelector((state) => state.time.time)

	const [time, setTime] = useState('')
	
	const handleChange = async (event) => {
		setTime(event.target.value)
    dispatch(timeChange(event.target.value))
  };


  return (

				 <FormControl sx={{ m: 1, minWidth: 120 }}>

						<InputLabel id="demo-simple-select-helper-label">Time period</InputLabel>

							<Select
								labelId="demo-simple-select-helper-label"
								id="demo-simple-select-helper"
								value={timePeriod}
								label="Time Period"
								onChange={handleChange}
							>

								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value='30min'>30min</MenuItem>
								<MenuItem value='1hr'>1hr</MenuItem>
								<MenuItem value='24hr'>24hr</MenuItem>
								<MenuItem value='7d'>7d</MenuItem>
								<MenuItem value='14d'>14d</MenuItem>
								<MenuItem value='30d'>30d</MenuItem>

							</Select>

						<FormHelperText>Choose your time period</FormHelperText>
						
      		</FormControl> 
	);
}
