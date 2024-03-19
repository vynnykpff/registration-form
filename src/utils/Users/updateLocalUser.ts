import {User} from "@types";

export const updateLocalUser = (user: User) => {
	const localUsers: User[] = JSON.parse(localStorage.getItem('users')!);

}