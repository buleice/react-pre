const tm = (state = [], action) => {
    switch (action.type) {
        case 'SET_TM':
            return action.tm;
        default:
            return state
    }
}
export default tm
