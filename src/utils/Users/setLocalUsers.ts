import { User } from "@types";

export const setLocalUsers = (user: User) => {
	let localUsers: User[] = JSON.parse(localStorage.getItem('users') || '[]');

	if (localUsers.length > 0) {
		localUsers.push(user);
	} else {
		localUsers = [user];
	}

	localStorage.setItem('users', JSON.stringify(localUsers));
}
