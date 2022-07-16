export const UPDATE_PROGRESS = 'UHI_UPDATE_PROGRESS';
export const RESET_PROGRESS = 'RESET_PROGRESS';

export const updateProgress = payload => ({
    type: UPDATE_PROGRESS,
    payload
});

export const resetProgress = payload => ({
    type: RESET_PROGRESS,
    payload
});
