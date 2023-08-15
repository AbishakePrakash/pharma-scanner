import { Box, Button } from '@mui/material';
import Webcam from 'react-webcam';

const Scanner = () => {
    return ( 
        <>
        <Box>
            Cam
        </Box>
        <Box>
            <Button>Open Camera</Button>
            <Webcam />
        </Box>
        </>
     );
}
 
export default Scanner;