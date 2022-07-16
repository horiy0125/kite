import axios from 'axios';
import { envVariables } from '../config/envVariables';

export const baseApiInstance = axios.create({
  baseURL: `${envVariables.API_BASE_URL}/api`,
});
