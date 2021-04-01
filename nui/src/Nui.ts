const events: { [key: string]: Function[] } = {};

const onEvent = (type: string, func: Function) => {
    // Initialize new array for event
    if (events[type] == null) {
        events[type] = [];
    }
    // Add new handler to the list of event handlers
    events[type].push(func);
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

export {
    onEvent,
    emitEvent,
    ListenNuiMessages
}