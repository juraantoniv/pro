import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {number} from "prop-types";
import {useSelector} from "react-redux";

export default function BasicRating() {
    const [value, setValue] = React.useState<number | null>(2);
    const {setMovie}=useSelector(state => state.movieReducer)

    return (
        <Box
            sx={{
                '& > legend': { mt: 2 },
            }}
        >
            <Typography component="legend">Controlled</Typography>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(setMovie);
                }}
            />
            <Typography component="legend">Read only</Typography>
            <Rating name="read-only" value={value} readOnly />

        </Box>
    );
}