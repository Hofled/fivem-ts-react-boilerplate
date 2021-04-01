import React from 'react';
import { onEvent } from "../../Nui";

import { selectVisibility, setVisibility } from "./appSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const App: React.FunctionComponent = (props) => {
    const visibility = useAppSelector(selectVisibility);
    const dispatch = useAppDispatch();

    onEvent("display", (payload: boolean) => {
        dispatch(setVisibility(payload));
    });

    return (
        <div hidden={!visibility}>
            <h1 style={{ fontSize: "50px", backgroundColor: "white" }}>{visibility.toString()}</h1>
        </div>
    )
}

export default App;
