export const UPDATE_PROGRESS = 'UHI_UPDATE_PROGRESS';
export const RESET_PROGRESS = 'RESET_PROGRESS';
export const APPT_DETAILS = 'APPT_DETAILS';
export const SAVE_OPTIONS = 'SAVE_OPTIONS';
export const REM_OPTIONS = 'REM_OPTIONS';
export const FINAL_DATA = 'FINAL_DATA';

export const updateProgress = payload => ({
    type: UPDATE_PROGRESS,
    payload
});

export const resetProgress = payload => ({
    type: RESET_PROGRESS,
    payload
});

export const saveApptDetails = payload => ({
    type: APPT_DETAILS,
    payload
});

export const saveOptions = payload => ({
    type: SAVE_OPTIONS,
    payload
});

export const remOptions = payload => ({
    type: REM_OPTIONS,
    payload
});

export const finalData = payload => ({
    type: FINAL_DATA,
    payload
});
