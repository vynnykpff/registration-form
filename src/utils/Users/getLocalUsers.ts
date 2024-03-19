import {User} from "@types";

export const getLocalUsers = () => {
	const users = localStorage.getItem('users')!;

	return JSON.parse(users) as User[];
}