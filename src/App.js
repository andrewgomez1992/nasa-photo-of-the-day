import React, { useState, useEffect } from "react"; // added useState and useEffect
import axios from 'axios'; // imported axios, checked package.json and axios was already installed
import "./App.css";
import styled, { keyframes } from "styled-components"; // imported styled components
import theme from "./theme/theme";
import NasaPhoto from './Components/NasaPhoto';

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`

const StyledDetails = styled.div`
  opacity: 0;
  transform: scale(2) rotateZ(180deg);
  animation: ${kf} 0.5s ease-in-out forwards;
  background-color: black;
  font-family: 'Oswald', sans-serif;
  p {
    font-size: 2rem;
    background: linear-gradient(
      to right, 
      hsl(98 100% 62%), 
      hsl(204 100% 59%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }
  
  img {
    border-radius: 50px;
  }
  img:hover {
    transform: scale(1.1);
  }

  h3 {
    font-size: 4rem;
  }

  h4 {
    color: blueviolet;
    padding-top: 2%;
  }

  h1 {
    padding-top: 10%;
    font-size 3rem;
    color: white;
    background: linear-gradient(
      to right, 
      hsl(98 100% 62%), 
      hsl(204 100% 59%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }

  p {
    font-family: "Dank Mono", ui-monospace, monospace;
    font-size: 1rem;
    padding: 1%;
  }
  
  html {
    block-size: 100%;
    inline-size: 100%;
  }


  
`;

function App() {
  const [data, setData] = useState(); // added state for data

  

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=rtMBNUauQBRe19euWHkHOVBbxk16gMzGRmhg536c')
      .then(res => {
      console.log(res); // ALWAYS CONSOLE LOG RESPONSE FROM SERVER
      setData(res.data);
    }).catch(err => console.error(err))
  }, []) // added useEffect and empty array as second argument for function to run once 


  return (
    <StyledDetails className="App">
      <h1>NASA'S PHOTO OF THE DAY !</h1> {/** i know this is hardcoded :/ */}
      <h4>created by Andrew Gomez</h4> {/** RESEARCHING THIS SHIT TONIGHT */}
      <p>
        { data && <NasaPhoto photo={data} /> }
        
      </p>
      <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"></link>
    
     
    
    </StyledDetails>
  );
}

export default App;

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY



/**
date: "2022-03-23"
explanation: "Massive stars can blow bubbles.  The featured image shows perhaps the most famous of all star-bubbles, NGC 7635, also known simply as The Bubble Nebula. Although it looks delicate, the 7-light-year diameter bubble offers evidence of violent processes at work. Above and left of the Bubble's center is a hot, O-type star, several hundred thousand times more luminous and some 45-times more massive than the Sun. A fierce stellar wind and intense radiation from that star has blasted out the structure of glowing gas against denser material in a surrounding molecular cloud. The intriguing Bubble Nebula and associated cloud complex lie a mere 7,100 light-years away toward the boastful constellation Cassiopeia. This sharp, tantalizing view of the cosmic bubble is a reprocessed composite of previously acquired Hubble Space Telescope image data.   Birthday Surprise: What picture did APOD feature on your birthday? (post 1995)"
hdurl: "https://apod.nasa.gov/apod/image/2203/Bubble_HubbleOzsarac_1952.jpg"
title: "The Bubble Nebula from Hubble"
 */