import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import tm from './tm'
import {
    showGuide, showMoreGroup, modalOpen, showCouponBuy,
    couponBuyFilter,userCoupons,cantuanPrice,buyMode,groupId,couponId
} from './showstatus'
import {pageData} from "./reducer-child";
import groups from './groupData'
import freeBuy from './freeBuy'

export default combineReducers({
    todos,
    visibilityFilter,
    tm,
    showGuide,
    showMoreGroup,
    groups,
    freeBuy,
    modalOpen,
    showCouponBuy,
    couponBuyFilter,
    userCoupons,
    cantuanPrice,
    buyMode,
    groupId,
    couponId,
    pageData
})
