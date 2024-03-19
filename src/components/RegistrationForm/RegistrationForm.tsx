import {CustomForm} from "./components/CustomForm";
import styles from "./RegistrationForm.module.scss";

export const RegistrationForm = () => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Реєстрація користувача</h3>
			<CustomForm/>
		</div>
	);
};
