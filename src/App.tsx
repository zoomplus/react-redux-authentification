//system
import React from 'react';

//libs
import {
    Box,
    Container
} from "@mui/material";
import {
    NavLink
} from "react-router-dom";
import styled from '@emotion/styled';

//components
import Router from "./Pages/Router";

function App() {
    const StyledUl = styled.ul`
        list-style-type: none;
    `;

    return (
        <Box className="app" sx={{backgroundColor: "background.default"}}>
            <Container>
                <header>
                    Что-то в шапке
                    <nav>
                        <StyledUl>
                            <li>
                                <NavLink to={'/'}>
                                    <a>Home</a>
                                </NavLink>
                                <NavLink to={'/private/'}>
                                    <a>Private</a>
                                </NavLink>
                            </li>
                        </StyledUl>
                    </nav>
                </header>
                <Router/>
                <footer>
                    Что-то в подвале
                </footer>
            </Container>
        </Box>
    );
}

export default App;
