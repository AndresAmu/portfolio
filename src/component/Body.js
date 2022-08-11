import React from "react"
import { Box, Typography } from "@mui/material"
import Avatar from '@mui/material/Avatar';
import '../index.css'
import './styles/body.css'


const Body = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} className="header">
            <Box sx={{ textAlign: 'center', width: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <Typography sx={{
                    color: 'white',
                    fontSize: 40
                }}>
                    Hi, I'm Andrés
                </Typography>
                <Typography sx={{
                    color: 'white'
                }}>
                    I am a person with good predisposition, creative and passionate.
                    Here you can see my full CV.
                </Typography>
                <Box sx={{
                    marginTop: 2
                }}>
                    <a href="https://drive.google.com/u/0/uc?id=1EFbRT3aAr8rCJQf-W2icp7Sw3sTdZV1k&export=download">
                    <div className="button" data-tooltip="Size: 253Kb">
                        <div className="button-wrapper">
                            <div className="text">Download CV</div>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </div>
                    </a>
                </Box>
            </Box>


            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar
                className="avatar"
                    alt="Andrés Amuchástegui"
                    
                />
                <Typography sx={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: 'white'
                }}>

                    FULL STACK MERN
                </Typography>
            </Box>
        </Box>
    )
}

export default Body