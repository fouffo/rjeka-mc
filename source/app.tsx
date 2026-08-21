import React, {useState} from 'react';
import {Text, useWindowSize, useInput, Box} from 'ink';
import KeybindsPopup from './popups/keybinds.js';
import HomeScreen from './views/home.js';

type Props = {};

export default function App({}: Props) {
	const {columns, rows} = useWindowSize();
	const [keybindsVisibility, setKeybindsVisibility] = useState(false);

	useInput((input, key) => {
		if (key.ctrl) {
			if (input === 'k') {
				setKeybindsVisibility(true); // If the keybind has been pressed then this is true and the popup is shown. If it is released it gets hidden.
			}
		} else if (key.escape) {
			setKeybindsVisibility(false); // TODO: change this to close the active popup / revert to the previous state
		} else {
			// stuff without modifiers or other keys
		}
	});

	return (
		<>
			<Box
				width={columns}
				height={rows}
				backgroundColor="#222"
				borderBackgroundColor="#222"
				borderColor="#888"
				borderStyle={'round'}
				alignItems="center"
				flexDirection="column"
			>
				<Box
					flexGrow={1}
					justifyContent="center"
					alignItems="center"
					position="relative"
				>
					{/* window content goes in this box */}
					<HomeScreen />
					<KeybindsPopup visible={keybindsVisibility} />
				</Box>
				<Box width="100%" justifyContent="space-around">
					<Text color="#888">
						{/* may be a good idea to use Static instead? */}
						<Text underline>Ctrl + K</Text> to view the keybinds
					</Text>
				</Box>
			</Box>
		</>
	);
}
