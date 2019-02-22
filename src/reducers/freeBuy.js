const freeBuy = (state = false, action) => {
    switch (action.type) {
        case 'SET_FREEBUY':
            return action.freeBuy;
        default:
            return state
    }
}
export default freeBuy
