export const productReducer=(state,action)=>{
    switch(action.type)
    {
        case "Groceries":
            return {category:state.category==="Groceries"}
        case "Juice":
            return {...state,sort:action.payload}
        case "addtocart":
                return {...state,cart:[...state.cart,{...action.payload,qty:1}]}
        case "removefromcart":
                return {...state,cart:state.cart.filter((c)=>c.id!==action.payload.id)}
        case "changeqty":
                return {...state,cart:state.cart.filter((c)=>c.id===action.payload.id?(c.qty=action.payload.qty):c.qty)}
        case "sortbyprice":
            return{...state,sort:action.payload}
                default:
            return state
    }
}