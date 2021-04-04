const events: { [key: string]: Function[] } = {};

declare function GetParentResourceName(): string;

const PARENT_RESOURCE_NAME = GetParentResourceName();

const onEvent = (type: string, func: Function) => {
    // Initialize new array for event
    if (events[type] == null) {
        events[type] = [];
    }
    // Add new handler to the list of event handlers
    events[type].push(func);
}

const invokeNUICallback = (name: string, data: any) => {
    fetch(`https://${PARENT_RESOURCE_NAME}/${name}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data)
    }).then(resp => resp.json()).then(resp => console.log(resp));
}

const emitEvent = (type: string, payload: any) => {
    window.dispatchEvent(new MessageEvent("message", {
        data: { type, payload }
    }));
}

const ListenNuiMessages = () => {
    window.addEventListener('message', (e: MessageEvent) => {
        if (!events[e.data.type]) return;
        // Invoke all event handlers
        events[e.data.type].forEach(handler => handler(e.data.payload));
    });

    return null; // dont render anything, just listen for events.
}

window.addEventListener("keydown", ev => {
    if (ev.key == "Escape") {
        invokeNUICallback("exit", null);
    }
});

export {
    onEvent,
    emitEvent,
    invokeNUICallback,
    ListenNuiMessages
}