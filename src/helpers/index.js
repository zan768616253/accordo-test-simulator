export const busExists = (newPosition, existingBuses) => {
    for (let i = 0; i < existingBuses.length; i++) {
        const bus = existingBuses[i];
        if (newPosition.posX === bus.posX
            && newPosition.posY === bus.posY) {
            return true;
        }
    }
    return false;
}
