import React from "react";

import { Box, Paper, Stack, Button } from '@mui/material';
import Questions from '../questions/questions';

function Quiz() {


    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 2000,
                        height: 500,
                    },
                }}
            >
                <Paper elevation={3} style={{ height: '300px', position: 'relative' }}>
                    <Box display="flex" flexDirection="column" height="100%">
                        <Box flexGrow={1}>
                            <Questions />
                        </Box>
                        <Box>
                            <Stack spacing={2} direction="row" justifyContent="space-between">
                                <Button variant="contained">Previous</Button>
                                <Button variant="contained">Next</Button>
                            </Stack>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    );
}

export default Quiz;