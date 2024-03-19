import {useState, useRef} from 'react';
import {v4 as uuidv4} from 'uuid';
import {getLocalUsers} from "@utils";
import {User} from "@types";
import styles from './UsersList.module.scss';
import {Button} from "antd";

export const UsersList = () => {
	const [users, setUsers] = useState<User[]>(getLocalUsers() || []);
	const [editingUser, setEditingUser] = useState<User | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const updateUser = (editedUserName: string) => {
		if (!editingUser) return;

		const updatedUsers = users.map(user => user === editingUser ? {...user, name: editedUserName} : user);

		setUsers(updatedUsers);
		localStorage.setItem('users', JSON.stringify(updatedUsers));
		setEditingUser(null);
	};

	const deleteUser = (userToDelete: User) => {
		const updatedUsers = users.filter(user => user !== userToDelete);

		setUsers(updatedUsers);
		localStorage.setItem('users', JSON.stringify(updatedUsers));
	};

	const handleEditUser = (user: User) => {
		setEditingUser(user);
		if (inputRef.current) inputRef.current.focus();
	};

	return (
		<div className={styles.container}>
			<ul className={styles.usersList}>
				{users.length ? users.map(user => (
						<li key={uuidv4()} className={styles.usersListItem}>
							{editingUser === user ? (
								<div className={styles.navigationWrapper}>
									<input
										className={styles.editUserPayload}
										type="text"
										defaultValue={user.name}
										ref={inputRef}
									/>
										<Button className={styles.button} type='primary' onClick={() => updateUser(inputRef.current?.value || '')}>Зберегти</Button>
										<Button onClick={() => setEditingUser(null)}>Відмінити</Button>
								</div>
							) : (
								<>
									<span className={styles.userPayload} onClick={() => handleEditUser(user)}>{user.name}, {user.email}, вік - {user.age}</span>
									<Button className={styles.removeButton} danger type='primary' onClick={() => deleteUser(user)}>Видалити</Button>
								</>
							)}
						</li>
					)) :
					<li className={styles.usersNotFound}>Зареєстрованих користувачів немає</li>
				}
			</ul>
		</div>
	);
};
