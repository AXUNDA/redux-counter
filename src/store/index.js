// import { createStore } from "redux"

// const reducerFn = (state = { counter: 5 }, action) => {

//       if (action.type === "INC") {
//             return { counter: state.counter + 1 }
//       }
//       if (action.type === "DEC") {
//             return { counter: state.counter - 1 }
//       }
//       if (action.type === "add10") {
//             return { counter: state.counter + action.payload }


//       }
//       return state;

// }


// const store = createStore(reducerFn)

// export default store


import { configureStore, createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({

      name: "counter",
      initialState: { counter: 0 },
      reducers: {
            increment(state, action) {
                  state.counter++;

            },
            decrement(state, action) {
                  state.counter--

            },
            add10(state, action) {
                  state.counter += action.payload

            }
      }
})

const store = configureStore({ reducer: counterSlice.reducer })
export const actions = counterSlice.actions

export default store