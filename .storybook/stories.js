import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import {
	AnnotationList,
	RenderedText
} from '../src'
import Tags from '../src/tags/epistolarium'
import { activeAnnotation, rootAnnotation } from './data'

const createStory = (name) => {
	const stories = storiesOf(name, module)
	stories.addDecorator(withKnobs)
	return stories
}

createStory('AnnotationList')
	.add('default', () =>
		<AnnotationList
			activateAnnotation={ action('activate Annotation') }
			rootAnnotation={ object('rootAnnotation', rootAnnotation) }
		/>
	)
	.add('active annotation', () =>
		<AnnotationList
			activeAnnotation={ object('activeAnnotation', activeAnnotation) }
			activateAnnotation={ action('activate Annotation') }
			rootAnnotation={ object('rootAnnotation', rootAnnotation) }
		/>
	)

createStory('RenderedText')
	.add('default', () =>
		<RenderedText
			root={ object('rootAnnotation', rootAnnotation) }
			tags={Tags}
		/>
	)
	.add('active annotation', () =>
		<RenderedText
			activeAnnotation={ object('activeAnnotation', Object.assign({}, activeAnnotation)) }
			root={ object('rootAnnotation', rootAnnotation) }
			tags={Tags}
		/>
	)