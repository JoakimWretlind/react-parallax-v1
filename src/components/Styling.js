import styled from 'styled-components';
import Triangles from '../assets/images/background-triangles.png'

export const ParallaxSection = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Parallax = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ParallaxHeading = styled.h1`  
    margin: 20vh 0 0 -20rem;
    width: max-content;
    text-transform: uppercase;
    color: #F2F6FE;
    font-size: clamp(3rem, 12vw, 6rem);
    letter-spacing: .5rem;
    z-index: 1;
`;

export const SecondHeading = styled.h2`    
    margin: 30vh 0 0 20rem;
    font-size: clamp(1.6rem, 4vw, 4rem);
    text-transform: capitalize;
    color: #FA8887;
    z-index: 2;
`;

export const ThirdHeading = styled.h2`
    margin: 14vh 0 0 0;
    font-size: clamp(2em, 5vw, 5rem);
    text-transform: capitalize;
    color: #F2F6FE;
    z-index: 2;
`;

export const BgTriangles = styled.div`
    display: flex;
    justify-content: center;
    width: 1080px;
    height: 1260px;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    background-image: url(${Triangles});
`;

export const MainBg = styled.div`
    width: 100vw;
    min-width: 40rem;
 
    height: 200%;
    position: absolute;
    @media screen and(min-width: 768px){
        min-height: 100vh;
    }
`;

export const MainImg = styled.img`
    width: 100vw;
    justify-content: cover;
    @media screen and(min-width: 768px){
        min-width: 100vw;
        min-height: 100vh;
    }
`;

