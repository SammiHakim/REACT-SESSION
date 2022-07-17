const initialState = {
  products: [],
};

export const changeCartCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (state.products.length) {
        return { products: [...state.products, action.payload] };
      } else {
        return { products: [action.payload] };
      }
    case "REMOVE_FROM_CART":
      if (state.products.length) {
        const data = state.products.filter(
          (item) => item.id !== action.payload
        );
        return { products: [...data] };
      } else {
        return { ...state };
      }
    default:
      return state;
  }
};
