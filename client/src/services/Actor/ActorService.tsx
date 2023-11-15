import { API } from "../APIS/constants"
import { serverA } from './../APIS/index';

export class ActorService {
	static getAll = async () => {
		try {
			const response = await serverA.get(API.ACTORS);
			return response.data;
		} catch (error) {
			throw error; // You can throw the error for better error handling in the component
		}
	}
}

