import { createSlice } from "@reduxjs/toolkit";
const initialState={
    itemsList:[],
    totalCount:0,
    totalPrice:0,
    showCart:false,
    changed:false
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            state.changed = true;
            const newItem = action.payload;
            const existingItem = state.itemsList.find( el => el.id === newItem?.id)
            if(existingItem) {
                existingItem.count++ ;
                existingItem.totalPrice += newItem.price  ;
                state.totalPrice = state.itemsList.reduce((total, item) => total + item.price * item.count, 0);
                state.totalPrice = state.itemsList.reduce((total, item) => total + item.price * item.count, 0);
            } else {
                state.itemsList.push({
                    id: newItem?.id,
                    price: newItem?.price,
                    count:1,
                    totalPrice: newItem.price  ,
                    title: newItem?.title,
                    image: newItem?.image
                })
                state.totalCount++;
                state.totalPrice = state.itemsList.reduce((total, item) => total + item.price * item.count, 0);
            }
        },
        decreaseCart(state,action){
          state.changed = true;
          const newItem = action.payload
          const itemIndex = state.itemsList.findIndex( el => el.id === newItem.id );

          if( state.itemsList[itemIndex].count > 1) {
            state.itemsList[itemIndex].count -= 1;
            state.itemsList[itemIndex].totalPrice -=  state.itemsList[itemIndex].price
            state.totalCount = state.itemsList.reduce((i,item) => i + item.count , 0);
            state.totalPrice = state.itemsList.reduce((i,item) => i + item.price * item.count , 0)

          } else if( state.itemsList[itemIndex].count === 1){
            const nextCartItem = state.itemsList.filter( el => el.id !== newItem.id) 
            state.itemsList = nextCartItem;
            state.totalCount = nextCartItem.reduce((i,item) => i + item.count , 0);
            state.totalPrice = nextCartItem.reduce((i,item) => i + item.price * item.count , 0)
          }
        },
        incereaseCart(state,action){
            state.changed = true;
            const newItem = action.payload;
            const findIndex = state.itemsList.findIndex( el => el.id === newItem.id);

            if(state.itemsList[findIndex].count < 6) {
                state.itemsList[findIndex].count += 1;
                state.itemsList[findIndex].totalPrice += state.itemsList[findIndex].price;
                state.totalCount = state.itemsList.reduce((i,item) => i + item.count, 0);
                state.totalPrice = state.itemsList.reduce((i,item) => i + item.price * item.count , 0)
            }
        },
        removeFromCart(state,action){
            state.changed = true;
            const newItem = action.payload;
            const items = state.itemsList.filter( el => el.id !== newItem.id );
            state.itemsList = items
            
            const totalCount= items.reduce((i,item) => i + item.count , 0);
            const totalPrice = items.reduce((sum, item) => sum + item.price * item.count, 0);

            state.totalCount = totalCount;
            state.totalPrice = totalPrice;
        },
        removeAllCart(state,action){
            state.changed = true;
            state.itemsList=[];
            state.totalCount=0;
            state.totalPrice=0;
        }
    }
})
export const selectAllItems = state => state.cart
export const {addToCart,decreaseCart,removeFromCart,incereaseCart,removeAllCart} = cartSlice.actions
export default cartSlice.reducer;