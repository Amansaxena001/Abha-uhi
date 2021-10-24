import { useMutation } from 'react-query';
import { submitFeedback } from './api';

export const useFeeback = () => {
    const { data, isLoading, isError, mutate, error } = useMutation(submitFeedback);

    return {
        data,
        isLoading,
        isError,
        mutate,
        error
    };
};
