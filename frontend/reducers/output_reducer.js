import { RECEIVE_OUTPUT, RECEIVE_SNIPPET } from "../actions/snippet_actions";

const outputReducer = (state = {}, action) => {
    Object.freeze(state);
    console.log("in output reducer")
    console.log(action.output)

    switch(action.type) {
        case RECEIVE_OUTPUT:
            return {output: action.output}
        case RECEIVE_SNIPPET:
            return {};
        default:
            return state;
    }
};

export default outputReducer;