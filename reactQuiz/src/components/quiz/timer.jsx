import React, { useState, useEffect } from 'react';

function Timer({ initialTime, onEnd }) {
    const [timeleft, setTimeleft] = useState(initialTime);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setTimeleft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(id);
                    if (onEnd) onEnd();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
        setIntervalId(id);

        return () => clearInterval(id);
    }, [onEnd]);

    return (
        <div>
            <span>Time Left: {timeleft}</span>
        </div>
    );
}

export default Timer;