import React from 'react';
import {Text, Box} from 'ink';

type Props = {
	visible: boolean;
};

const binds = [
	{action: 'Ctrl + K', description: 'Show keybinds'},
	{action: 'Esc', description: 'Pop dialog / go back'},
	{action: 'Tab', description: 'Change focus'},
	{action: 'Ctrl + C', description: 'Quit'},
];

export default function KeybindsPopup({visible}: Props) {
	return (
		<Box
			position="absolute"
			display={visible ? 'flex' : 'none'}
			alignItems="center"
			justifyContent="center"
			backgroundColor="#222"
			borderBackgroundColor="#222"
			borderColor="#888"
		>
			<Box
				borderStyle="round"
				borderBackgroundColor="#222"
				flexDirection="column"
				alignItems="center"
				paddingY={1}
				paddingX={2}
			>
				<Text bold underline>
					Keybinds
				</Text>
				<Box height={2} />
				<Box>
					<Box flexDirection="column" gap={1}>
						{binds.map(bind => (
							<Text key={bind.action} bold>{bind.action}</Text>
						))}
					</Box>
					<Box width={4} />
					<Box flexDirection="column" gap={1}>
						{binds.map(bind => (
							<Text key={bind.action}>{bind.description}</Text>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
