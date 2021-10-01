import { apis } from '@app/src/constants/api';
import { apiV1 } from '@app/src/utils/api';

interface IData {
    name: string;
    email: string;
    ssv_graduate: boolean;
    review_content: string;
    star_rating: number;
    student_year_count: number;
    profile_avatar: string;
}

export const submitFeedback = (data: IData): Promise<any> =>
    apiV1
        .post(apis.submitUserFeedback, data)
        .then(res => res.data)
        .catch(err => {
            throw err;
        });

export const uploadImage = (data: any) =>
    apiV1
        .post(apis.imageUpload, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
