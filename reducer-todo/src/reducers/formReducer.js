const initialState = { task: "" };

export const SUBMIT = "SUBMIT";
export const INPUT_CHANGE = "INPUT_CHANGE";

export function reducer(state, action) {
  switch (action.type) {
    case SUBMIT:
      return initialState;
    case INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}
