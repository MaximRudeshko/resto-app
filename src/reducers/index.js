const initialState = {
    menu : [],
    loading:true,
    items: [],
    totalPrice: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_LOADED':
            return {
                ...state,
                menu:action.payload,
                loading:false
            }   
        case 'DATA_REQUSTED':
            return {
                ...state,
                menu:state.menu,
                loading:true
            }   
        case 'ADDED_ITEM':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id)
            const newItem = {
                title:item.title,
                price:item.price,
                url: item.url,
                id: item.id
            }
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + newItem.price
            }
        case 'DELETE_ITEM':
            const index = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === index);
            const itemPrice = state.items[itemIndex]['price']
            return{
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                totalPrice: state.totalPrice - itemPrice
            }  
        default:
            return state
    }
}

export default reducer