let nuiDisplayed = false;

let toggleNUIVisibilityAndFocus = () => {
    setNUIVisibilityAndFocus(!nuiDisplayed)
};

let setNUIVisibilityAndFocus = (visible) => {
    nuiDisplayed = visible;
    
    console.log(`Setting NUI visibility: ${nuiDisplayed}`);

    SetNuiFocus(nuiDisplayed, nuiDisplayed);

    SendNuiMessage(JSON.stringify({
        type: "display",
        payload: nuiDisplayed
    }));
}

RegisterNuiCallbackType("exit");

on('__cfx_nui:exit', (data, responseCallback) => {
    console.log(`Received ${data} from the NUI callback, existing NUI.`);
    toggleNUIVisibilityAndFocus();
});

RegisterCommand("toggleUI", () => {
    toggleNUIVisibilityAndFocus();
}, false);