import React, { useRef } from "react";

interface customButtonProps {}

export const customButton: React.FC<customButtonProps> = ({}) => {
    const inpRef = useRef<HTMLInputElement>(null);
    return (
        <div>
            <input ref={inpRef} />
        </div>
    );
};
