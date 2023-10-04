'use client';

import React from 'react';
import Image from 'next/image';
import { customButtonPorps } from '@/types';

const CustomButton = ({title, btnType, containerStyle, handleClick}: customButtonPorps) => {
    return (
        <button
            disabled={false}
            type={'button' || btnType}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}
        >
            <span className='flex-1'>
                {title}
            </span>
        </button>
    )
}

export default CustomButton