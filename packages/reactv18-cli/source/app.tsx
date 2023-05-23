import React from 'react';
import {Text} from 'ink';
import { TextInput } from '@inkjs/ui';

type Props = {
	name: string | undefined;
};

export default function App({name = 'Stranger'}: Props) {
	const [value, setValue] = React.useState(name);
	return (
		<>
		<TextInput onChange={setValue} />
		<Text>
			Hello, <Text color="green">{value}</Text>
		</Text>
		</>
	);
}
