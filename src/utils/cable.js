import { createConsumer } from "@rails/actioncable";

let cable = null;

export function connectCable(token) {
    if (!cable) {
        cable = createConsumer(`ws://localhost:3000/cable?token=${token}`);
    }
    return cable;
}

export function disconnectCable() {
    if (cable) {
        cable.disconnect();
        cable = null;
    }
}
