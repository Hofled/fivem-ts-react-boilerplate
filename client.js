let nuiDisplayed = false;

RegisterCommand("toggleUI", () => {
    nuiDisplayed = !nuiDisplayed;
    console.log("Toggling visibility");

    emit("chat:addMessage", {
        args: [
            "Toggling UI visibility"
        ]
    });

    SendNuiMessage(JSON.stringify({
        type: "display",
        payload: nuiDisplayed
    }));
}, false);