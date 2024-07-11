import React, { useState, useEffect } from "react";

import {
    Box, Card, CardActions, CardContent, Button, Typography, List,
    ListItem, Grid, ListItemIcon, ListItemText
} from '@mui/material'

function Questions() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState(0);

    const questions = [
        {
            title: 'Commonly used data types DO NOT include:',
            choices: ['strings', 'booleans', 'alerts', 'numbers'],
            answer: 'alerts',
        },
        {
            title: 'The condition in an if / else statement is enclosed within ____.',
            choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
            answer: 'parentheses',
        },
        {
            title: 'Arrays in JavaScript can be used to store ____.',
            choices: [
                'numbers and strings',
                'other arrays',
                'booleans',
                'all of the above',
            ],
            answer: 'all of the above',
        },
        {
            title: 'String values must be enclosed within ____ when being assigned to variables.',
            choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
            answer: 'quotes',
        },
        {
            title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
            choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
            answer: 'console.log',
        },
    ];

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerClick = (choice) => {

        console.log(`Question ${currentQuestionIndex + 1} answered with: ${choice}`);
        console.log(`Current question index before update: ${currentQuestionIndex}`);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => {
                const newIndex = prevIndex + 1;
                console.log(`Updated question index: ${newIndex}`);
                return newIndex;
            });
        } else {
            alert('Quiz completed!');
        }

    }

    

    useEffect(() => {
        console.log(`Current question index after update: ${currentQuestionIndex}`);
    }, [currentQuestionIndex]);

    return (
        <>
            <Card>
                <CardContent>
                    <Box display="flex" justifyContent="center" height="100%">
                        <Typography flexGrow={1} sx={{ fontSize: 18, width: "25%" }} color="text.primary">
                            Question {currentQuestionIndex + 1}
                        </Typography>
                    </Box>
                    {currentQuestion ? (
                        <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                            <Grid item xs={12} md={6}>
                                <Typography sx={{ mt: 4, mb: 1 }} variant="h6" component="div">
                                    {currentQuestion.title}
                                </Typography>
                                <List>
                                    {currentQuestion.choices.map((choice, index) => (
                                        <ListItem
                                            key={index}
                                            style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}
                                        >
                                            <Button
                                                variant="contained"
                                                onClick={() => handleAnswerClick(choice)}
                                                sx={{ width: "25%", textAlign: "left" }}
                                            >
                                                <ListItemText
                                                    primary={choice}
                                                    sx={{ width: "25%" }}
                                                />
                                            </Button>
                                        </ListItem>
                                    ))}
                                </List>
                            </Grid>
                        </Box>
                    ) : (
                        <Typography sx={{ mt: 4, mb: 1 }} variant="h6" component="div">
                            No more questions.
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </>
    );
}

export default Questions;