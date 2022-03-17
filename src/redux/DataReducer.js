

let storage  = window.localStorage.getItem("wishItems");

export const DataReducer = (state=[],action) => {
   

    if(action.type === "SET_LIST") {
        console.log(`data =`, action.payload);
        window.alert("Added to wishlist");

        if(storage === [] || storage === null){
            let list = [];
            list.push(action.payload);
            window.localStorage.setItem("wishItems", JSON.stringify(list));
          } else {
            let list = JSON.parse(storage);
            list.push(action.payload);
            window.localStorage.setItem("wishItems", JSON.stringify(list));
          }       
        window.location.href = "/"

    } else if(action.type === "REMOVE_LIST") {
        console.log(`id =`, action.payload);

        const data = JSON.parse(storage);
        data.splice(action.payload,1);
        window.localStorage.setItem("wishItems", JSON.stringify(data));
        window.location.href = "/home";

    } else {
        return state;
    }
}

