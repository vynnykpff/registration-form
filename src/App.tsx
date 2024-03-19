import styles from '#/styles/App.module.scss'
import {RegistrationForm, UsersList} from "@components";

export const App = () => {
	return (
		<div className={styles.container}>
			<RegistrationForm/>
			<UsersList/>
		</div>
	);
};
