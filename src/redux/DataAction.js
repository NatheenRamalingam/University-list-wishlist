const setWishList = (val) => {
    return {
        type: "SET_LIST",
        payload: val
    }
}


const removeWishList = (id) => {
    return {
        type: "REMOVE_LIST",
        payload: id
    }
};


export {setWishList, removeWishList};