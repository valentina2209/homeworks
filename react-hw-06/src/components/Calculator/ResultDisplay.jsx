import { memo } from "react";

function ResultDisplay({ result }) {
    console.log('Rerender ResultDisplay')
    return (
        <div> A + B = {result} </div>
    );
}

export default memo(ResultDisplay);