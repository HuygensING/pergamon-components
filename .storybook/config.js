import { configure } from '@storybook/react'

function loadStories() {
	require('./stories/components.tsx')

	require('./stories/tags.tsx')

	require('./stories/anchor.tsx')
	require('./stories/div.tsx')
	require('./stories/figure.tsx')
	require('./stories/list.tsx')
	require('./stories/p.tsx')
	require('./stories/pb.tsx')
	require('./stories/seg.tsx')

	require('./stories/named-entities')

	require('./stories/rend.tsx')
}

configure(loadStories, module)
