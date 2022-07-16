import { UPDATE_PROGRESS, RESET_PROGRESS } from './actions';

const initialState = {
    progress: 0
};

export const uhiReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_PROGRESS:
            return {
                progress: state.progress + payload
            };
        case RESET_PROGRESS:
            return {
                progress: payload
            };
        default:
            return state;
    }
};
