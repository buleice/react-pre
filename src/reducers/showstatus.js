
const showGuide = (state = false, action) => {
    switch (action.type) {
        case 'SET_SHOWGUIDE':
            return action.showGuide;
        default:
            return state
    }
}
const showMoreGroup = (state = false, action) => {
    switch (action.type) {
        case 'SET_SHOWMOREGROUP':
            return action.showMoreGroup;
        default:
            return state
    }
}

const modalOpen = (state = false, action) => {
    switch (action.type) {
        case 'SET_MODALOPEN':
            return action.modalOpen;
        default:
            return state
    }
}
const showCouponBuy=(state=false,action)=>{
    switch (action.type) {
        case 'SET_SHOWCOUPONBUY':
            return action.showCouponBuy;
        default:
            return state
    }
}
const couponBuyFilter=(state=0,action)=>{
    switch (action.type) {
        case 'SET_COUPONBUYFILTER':
            return action.couponBuyFilter;
        default:
            return state
    }
}
const userCoupons=(state=[],action)=>{
    switch (action.type) {
        case "SET_COUPONS":
            return action.userCoupons;
        default:
            return state
    }
}
const cantuanPrice=(state=0,action)=>{
    switch (action.type) {
        case "SET_CANTUANPRICE":
            return action.cantuanPrice;
        default:
            return state
    }
}

const buyMode=(state=0,action)=>{
    switch (action.type) {
        case "SET_BUYMODE":
            return action.buyMode;
        default:return state
    }
}
const groupId=(state=0,action)=>{
    switch (action.type) {
        case 'SET_GROUPID':
            return action.groupId;
        default:return state
    }
}

const couponId=(state="",action)=>{
    switch (action.type) {
        case 'SET_COUPONID':
            return action.couponId;
        default:
            return state
    }
}

export {
    showGuide,
    showMoreGroup,
    modalOpen,
    showCouponBuy,
    couponBuyFilter,
    userCoupons,
    cantuanPrice,
    buyMode,
    groupId,
    couponId
}
