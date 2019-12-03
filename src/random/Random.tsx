import React from 'react';

export default function Random() {
    return (
        <div>
            {Math.random() * 1000}
        </div>
    )
}