let nuiDisplayed = false;

RegisterCommand("toggle", () => {
    nuiDisplayed = !nuiDisplayed;
    SendNUIMessage({
        type: "display",
        payload: nuiDisplayed
    });
}, false);