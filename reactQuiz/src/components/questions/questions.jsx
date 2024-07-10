import React from "react";

import {
    Box, Card, CardActions, CardContent, Button, Typography, List,
    ListItem, Grid, ListItemIcon, ListItemText
} from '@mui/material'

function Questions() {

    return (
        <>
            <Card>
                <CardContent>
                    <Box display="flex" justifyContent="center" height="100%">
                        <Typography flexGrow={1} sx={{ fontSize: 18, outline: "2px solid blue", width: "25%" }} color="text.primary">
                            Question Number
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" height="100%">
                        <Grid item xs={12} md={6}>
                            <Typography sx={{ mt: 4, mb: 1 }} variant="h6" component="div">
                                Question Content
                            </Typography>
                            <List>

                                <ListItem style={{ display: "flex", flexDirection: "column", alignItems:"flex-start", outline:"2px solid red"}}>
                                    <ListItemIcon>

                                    </ListItemIcon>
                                    <ListItemText
                                        style={{ marginTop: "3%" }}
                                        primary="Answer 1"
                                        secondary="Answer 1 Content"
                                    />
                                    <ListItemText
                                        style={{ marginTop: "3%" }}
                                        primary="Answer 2"
                                        secondary="Answer 2 Content"
                                    />
                                    <ListItemText
                                        style={{ marginTop: "3%" }}
                                        primary="Answer 3"
                                        secondary="Answer 3 Content"
                                    />
                                    <ListItemText
                                        style={{ marginTop: "3%", marginBottom: "3%" }}
                                        primary="Answer 4"
                                        secondary="Answer 4 Content"
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}

export default Questions;