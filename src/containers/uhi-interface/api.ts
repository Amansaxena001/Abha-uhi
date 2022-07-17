import { apiV1 } from '../../utils/api/index';

export const fetchApptDetails = async (id: string) => apiV1.get(`/appointment/${id}`);

export const fetchSearchSuggestions = async (str: string) => apiV1.post('/symptoms/suggestions', { Symptom: str });

export const savePatientDetails = async data => apiV1.post('/emr/addEmrPatient', data);
export const uploadFileData = async data => apiV1.post('/document/add', data);
