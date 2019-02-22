const groups = (state = {}, action) => {
    switch (action.type) {
        case 'SET_GROUPS':
            return action.groups;
        default:
            return state
    }
}
export default groups
