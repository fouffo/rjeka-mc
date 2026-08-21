#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ rjeka-mc

	Options

	Examples
	  $ rjeka-mc
`,
	{
		importMeta: import.meta,
		flags: {},
	},
);

const {waitUntilExit} = render(<App />);

await waitUntilExit();

console.clear();
