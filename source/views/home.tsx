import React, { Children, ReactChildren, ReactElement } from 'react';
import {Text, Box, useInput, useFocusManager, useFocus} from 'ink';
import BigText from 'ink-big-text';

export default function HomeScreen() {
	const {focus} = useFocusManager();

	useInput((input, key) => {
		if (key.ctrl) return;
		if ((input === 's')) {
			focus('1');
		} else if (input === 'b') {
			focus('2');
		}
	});

	return (
		<Box
			position="absolute"
			alignItems="center"
			justifyContent="center"
			backgroundColor="#222"
			borderBackgroundColor="#222"
			borderColor="#888"
			flexDirection="column"
		>
			<BigText text="Rjeka-MC" />
			<Text color="#888">
				Your FOSS TUI Minecraft server stress testing and benchmarking utility
			</Text>
			<Box height={6}></Box>
			<Text bold>What are you looking for?</Text>
			<Box height={2}></Box>
			<Box flexDirection="row" gap={6}>
                <Button id='1' child={
                    <Text>
						<Text bold underline>
							S
						</Text>
						tress Test
					</Text>
                } />
				<Button id='2' child={
                    <Text>
                        <Text bold underline>
                            B
                        </Text>
                        enchmark
                    </Text>
                } />
			</Box>
		</Box>
	);
}

type ButtonProps = {
    readonly id: string;
    readonly child: ReactElement
}

function Button({id, child}: ButtonProps) {
	const {isFocused} = useFocus({id});

	return (
		<Box
            paddingX={3}
            paddingY={1}
            borderStyle="round"
            borderBackgroundColor="#222"
            borderColor={isFocused ? '#FFF' : '#888'}
        >
            {child}
        </Box>
	);
}
