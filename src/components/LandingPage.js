import React, { useState, useEffect } from "react";
import {
    ParallaxSection,
    Parallax,
    ParallaxHeading,
    SecondHeading,
    ThirdHeading,
    BgTriangles,
    MainBg,
    MainImg
} from './Styling';
import mainBg from '../assets/images/stars.jpg'

const LandingPage = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ParallaxSection>
            <Parallax>
                <ParallaxHeading style={{
                    transform: `translateY(${offsetY * 0.6}px)`
                }}>
                    play with parallax
                </ParallaxHeading>
                <SecondHeading>
                    all you need is a rocket
                </SecondHeading>
                <ThirdHeading
                    style={{
                        transform: `translateY(${offsetY * 0.2}px)`
                    }}>
                    and a full screen view
                </ThirdHeading>
            </Parallax>
            <MainBg style={{
                transform: `translateY(-${offsetY * 0.2}px)`
            }}
            >
                <MainImg src={mainBg} />
            </MainBg>
            <BgTriangles style={{
                transform: `translateY(${offsetY * 0.8}px)`
            }}
            />
        </ParallaxSection >
    );
}

export default LandingPage
