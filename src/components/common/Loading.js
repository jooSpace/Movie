import React from 'react';
import { Oval } from 'react-loader-spinner';

const loading = () => {
    return (
        <div className="contentWrap">
            <div style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                }}
            >
                <Oval
                    ariaLabel="loading-indicator"
                    height={100}
                    width={100}
                    strokeWidth={5}
                    strokeWidthSecondary={1}
                    color="blue"
                    secondaryColor="white"
                />
            </div>
        </div>
    );
};

export default loading;