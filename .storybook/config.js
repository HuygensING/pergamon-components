import { configure } from '@storybook/react';

function loadStories() {
	require('./stories.js');
	require('./tags/div.js');
}

configure(loadStories, module);
