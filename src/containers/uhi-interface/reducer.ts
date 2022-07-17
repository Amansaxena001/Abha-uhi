import { UPDATE_PROGRESS, RESET_PROGRESS, APPT_DETAILS, SAVE_OPTIONS, REM_OPTIONS, FINAL_DATA } from './actions';

const initialState = {
    progress: 0,
    apptDetails: {},
    options: [],
    data: []
};

export const uhiReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_PROGRESS:
            return {
                ...state,
                progress: state.progress + payload
            };
        case RESET_PROGRESS:
            return {
                ...state,
                progress: payload
            };
        case APPT_DETAILS:
            return {
                ...state,
                apptDetails: { ...payload }
            };
        case SAVE_OPTIONS:
            return {
                ...state,
                options: [...state?.options, payload]
            };
        case REM_OPTIONS:
            return {
                ...state,
                options: state.options?.filter(curr => curr !== payload)
            };
        case FINAL_DATA:
            return {
                ...state,
                data: [...payload]
            };
        default:
            return state;
    }
};
