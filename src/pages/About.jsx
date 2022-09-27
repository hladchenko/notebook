import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const About = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{marginTop: "50px"}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Typography variant="h2" gutterBottom>
                        Developed by <br />
                        Ruslan Hladchenko<br />
                        in 2022.
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <img src='/article-image.jpg'/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default About;