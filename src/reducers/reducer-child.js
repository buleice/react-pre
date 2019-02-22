

export const pageData=(state={},action)=>{
    switch (action.type) {
        case 'SET_PAGEDATA':
            return action.pageData;
        default:return state
    }
}
