import {User} from "@types";

export const checkOnCurrentUser = (users: User[]) => {
	return !!users.find(user => user.email);
}