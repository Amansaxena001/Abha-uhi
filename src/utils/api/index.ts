import axios from 'axios'

export const instance = axios.create({
  baseURL: 'localhost:8000',


})
type IError = {
  message: string,
  code: number | string

}
export const _getError = (err: any): IError => {
  let errorMessage = err.messsage;
  let errorCode = "000000"
  if (err && err.response && err.response.data && err.response.data.error) {
    errorMessage = err.response.data.error.message;
    errorCode = err.response.data.error.code;
  }
  return {
    message: errorMessage, code: errorCode

  }
}