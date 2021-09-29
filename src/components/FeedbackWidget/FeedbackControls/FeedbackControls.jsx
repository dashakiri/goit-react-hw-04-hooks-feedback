import React from "react";
import { Button } from "./FeedbackControls.styled";

export function FeedbackControls ({options, onButtonClick}) {
    return (
        options.map(option => {
        const label = option.replace(option[0], option[0].toUpperCase()); 
        return (<Button type='button' key={option} onClick={() => onButtonClick(option)}>
            {label}
        </Button>)
        }) 
    );
}