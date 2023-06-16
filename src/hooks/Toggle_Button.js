import React from 'react';
import { useState } from 'react';

const Toggle_Button = (active = false) => {
    const [isActive, setIsActive] = useState(active);
    console.log({ active });
    return [isActive, setIsActive];
}

export default Toggle_Button;