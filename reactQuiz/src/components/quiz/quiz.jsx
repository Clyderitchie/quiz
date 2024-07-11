import React from "react";

import { Box, Paper, Stack, Button } from '@mui/material';
import Questions from '../questions/questions';
import Timer from "./timer";

function Quiz() {

    const handleEndQuiz = () => {
        console.log('Quiz ended');
    };

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
                    <Box style={{ display:"flex", justifyContent:"space-between", padding:"1%"}}>
                        <Paper elevation={3} style={{ height: '10%', position: 'relative', width: "25%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box>
                                <Timer initialTime={60} onEnd={handleEndQuiz} />
                            </Box>
                        </Paper>

                        <Paper elevation={3} style={{ height: '10%', position: 'relative', width: "25%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box>
                                Score:
                            </Box>
                        </Paper>
                    </Box>
                    <Box display="flex" flexDirection="column" height="100%">

                        <Box flexGrow={1}>
                            <Questions />
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </>
    );
}

export default Quiz;