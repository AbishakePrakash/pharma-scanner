import { useState } from 'react';
import { Box, Typography } from '@mui/material';

// images
import bg from '../assets/background.jpg'
import access from '../assets/access.png'
import { LoadingButton } from '@mui/lab';

const Access = () => {

    const [isLoading, setIsLoading] = useState(false)


    const handleClick = () =>
    {

    }

    return (
            <Box sx={{ backgroundColor: 'aliceblue' }} textAlign={'center'}  height={'700px'} width={'250px'} padding={'20px'}  >
                <Box margin={'10px'}paddingTop={'20px'} mt={'100px'}>
                    <Typography sx={{fontWeight: 700}}>Scan the code to Get Started</Typography>
                </Box>
                <Box margin={'10px'} mt={'50px'}>
                    <img src={access} alt="@" width={'200px'} />
                </Box>
                <Box margin={'10px'}>
                    <LoadingButton sx={{ mt: '10px' }} onClick={handleClick} loading={isLoading} fullWidth size="large" type="submit" variant="contained">
                        Scan
                    </LoadingButton>
                </Box>
            </Box>
    );
}

export default Access;