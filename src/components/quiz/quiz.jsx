import React, { useState } from "react";

import { Box, Paper, Stack, Button } from '@mui/material';

import Questions from '../questions/questions';
import Timer from "./timer";
import Score from "./score";

// TODO:    
//  Add in score that will be stored in localStorage. 
//  Ask for user name before quiz to save and store along with their score.
//  Restyle the boxes/papers and the navBar
//  Deploy and add to portfolio   

function Quiz() {
    const [quizStart, setQuizStart] = useState(false);
    const [score, setScore] = useState(0);

    const handleQuizStart = () => {
        setQuizStart(true);
    }

    const handleEndQuiz = () => {
        console.log('Quiz ended');
    };

    const incrementScore = () => {
        setScore(prevScore => prevScore + 1);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex', flexWrap: 'wrap', '& > :not(style)': {
                        m: 1,
                        width: 2000,
                        height: 500,
                    },
                }}
                style={{ borderRadius: '16px' }}
            >
                <Paper elevation={7} style={{ height: '300px', position: 'relative' }}>
                    {!quizStart ? (
                        <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" }}>
                            <Paper elevation={7}>
                                <Button variant="contained" onClick={handleQuizStart} style={{ backgroundColor: "Black" }}>
                                    Start Quiz
                                </Button>
                            </Paper>

                        </Box>
                    ) : (
                        <>
                            <Box style={{ display: "flex", justifyContent: "space-between", padding: "1%" }}>
                                <Paper elevation={7} style={{ height: '10%', position: 'relative', width: "25%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box style={{ height: "100%"}}>
                                        <Timer initialTime={60} onEnd={handleEndQuiz} />
                                    </Box>
                                </Paper>

                                <Paper elevation={7} style={{ height: '10%', position: 'relative', width: "25%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box>
                                        Score: <Score score={score} />
                                    </Box>
                                </Paper>
                            </Box>
                            <Box display="flex" flexDirection="column" height="100%">

                                <Box flexGrow={1}>
                                    <Questions onCorrectAnswer={incrementScore} />
                                </Box>
                            </Box>
                        </>
                    )}

                </Paper>

            </Box>
        </>
    );
}

export default Quiz;