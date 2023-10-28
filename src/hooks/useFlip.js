import {useState} from 'react';

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const toggleFace = () => {
        setIsFacingUp(cardState => !cardState);
    }
    return [isFacingUp, toggleFace];
}

export default useFlip;