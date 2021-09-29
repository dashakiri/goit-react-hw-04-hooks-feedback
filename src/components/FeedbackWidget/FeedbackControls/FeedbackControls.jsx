import React from "react";
import { Button } from "./FeedbackControls.styled";

export function FeedbackControls ({options, onButtonClick}) {
    return (
        options.map(option => {
        return (<Button type='button' key={option} onClick={() => onButtonClick(option)}>
            {option}
        </Button>)
        }) 
    );
}