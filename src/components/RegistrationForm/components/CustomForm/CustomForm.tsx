import { Button, Form, Input } from "antd";
import { Rule } from "antd/lib/form";
import {checkOnCurrentUser, setLocalUsers} from "@utils";
import {User} from "@types";

type FormField = {
	name: keyof User;
	placeholder: string;
	rules: Rule[];
};

const formFields: FormField[] = [
	{
		name: "name",
		placeholder: "Name",
		rules: [{ required: true, message: "Please input your name!" }],
	},
	{
		name: "email",
		placeholder: "Email",
		rules: [
			{
				type: 'email',
				message: "Please input a valid email!",
			},
			{ required: true, message: "Email is required" },
		],
	},
	{
		name: "age",
		placeholder: "Age",
		rules: [{ required: true, message: "Please input your age!" }],
	},
];

export const CustomForm = () => {
	const onFinish = (values: User) => {
		const users = localStorage.getItem('users');

		if (users && checkOnCurrentUser(JSON.parse(users))) {
			return setLocalUsers(values);
		}

		return setLocalUsers(values);
	};

	return (
		<Form onFinish={onFinish}>
			{formFields.map((field) => (
				<Form.Item key={field.name} name={field.name} rules={field.rules}>
					<Input placeholder={field.placeholder} />
				</Form.Item>
			))}
			<Form.Item>
				<Button onClick={() => location.reload()} htmlType="submit" type="primary">
					Реєстрація
				</Button>
			</Form.Item>
		</Form>
	);
};
