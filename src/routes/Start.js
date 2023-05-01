import * as React from 'react';
import Button from '@mui/material/Button';
import green from "../img/green.png";

import styled from 'styled-components';
import '../App.css';

function GetStart(){
    const Out = styled.div`
        position:relative;
        bottom:40px;
    `;
    const In = styled.div`
        positon:relative;
        bottom:10px;
    `;
    const Company = styled.p`
        font-size:30px;
        font-weight:400;
        color:#d3d3d3;
        text-shadow:1px 1px 1px #000000;
    `;
    const Position = styled.div`
        width:100%;
        position: absolute;
        top: 43%;
        left: 50%;
        text-align:center;
        transform: translateY(-50%) translateX(-50%);
        -webkit- transform: translateY(-50%) translateX(-50%);
    `;
    const Welcome = styled.p`
        margin-top:-10px;
        font-weight:400;
        font-size:40px;
        color:#d3d3d3;
        text-shadow:1px 1px 1px #000000;
    `;
    const Text = styled.p`
        color:#d3d3d3;
        text-shadow:1px 1px 1px #2a2a2a;
        font-size:15px;
    `;
    const Green = styled.span`
        color:#00ff00;
    `;
    const Info = styled.p`
        color:#d3d3d3;
        font-weight:700;
        text-shadow:1px 1px 1px #2a2a2a;
        font-size:17px;
    `;
    const Intro = styled.p`
        color:#d3d3d3;
        font-size:18px;
        text-shadow:1px 1px 1px #2a2a2a;
        position:relative;
        bottom:40px;
    `;
    const Back = styled.div`
        position:absolute;
        width:90%;
        height:55%;
        background:#DBFFDB;
        opacity: 0.1;
        top:30%;
        left:5%;
    `;
      
    return(
        <>
            <img src={ green } alt="the forest" width="100%" height="600h"/>
            <Back></Back>
            <Position>
                <Out>
                <Company>For immigre</Company>
                <Info><a href="ready">Homepage</a>&ensp;&ensp;&ensp;<a href='ready'>Contact</a></Info>
                </Out>
                <In>
                <Welcome>Welcome to For immigre</Welcome>
                
                <Intro>Introduction to Australia's attractions and situation for immigration</Intro>
                <Button 
                    href="/ready" 
                    variant="contained" 
                    sx={"background-color:#00fa00;"}
                    color='success'
                    style={{
                        paddingTop:"7px", 
                        paddingBottom:"7px", 
                        paddingLeft:"40px", 
                        paddingRight:"40px",
                        fontSize:"17px",
                        fontWeight:"bold",
                        textShadow:"1px 1px 5px #000000",
                        opacity: 0.9,
                        textTransform: 'none',
                        position:"relative",
                        bottom:"40px"
                    }}
                
                >
                    Sign in with your Account
                </Button>
                <Text>Copyright © 2017-2023 <Green>For immigre</Green> .All rights reserved.</Text>
                </In>
            </Position>
        </>
    )
}
export default GetStart;