import React from 'react';
import Lottie from 'react-lottie-player';

import lottieJson from '../../resource/movieAnimation.json'

const MainLottieFiles = () => {
    return (
        <Lottie
            loop
            animationData={lottieJson}
            play
        />
    );
};

export default MainLottieFiles;