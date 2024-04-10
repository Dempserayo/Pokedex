// src/app/someReducer.js
const initialState = {
  // Estado inicial aquí...
};

const someReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // Manejar acciones aquí...
    default:
      return state;
  }
};

export default someReducer;
