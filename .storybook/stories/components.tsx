import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'
import {
	Keywords,
	Metadata,
	SemanticSuggestions,
} from '../../src'
import { AnnotationList, PergamonUITags, RenderedText } from '../../build'
import { activeAnnotation, rootAnnotation } from '../data'
// import Tags from '../../src/tags'

export const createStory = (name) => storiesOf(name, module)

export const createStoryWithKnobs = (name) => {
	const stories = createStory(name)
	stories.addDecorator(withKnobs)
	return stories
}

createStoryWithKnobs('Components/AnnotationList')
	.add('default', () =>
		<AnnotationList
			activateAnnotation={() => {}}
			activeAnnotation={null}
			rootAnnotation={ object('rootAnnotation', rootAnnotation) }
			tags={PergamonUITags}
		/>
	)
	.add('active annotation', () =>
		<AnnotationList
			activateAnnotation={() => {}}
			activeAnnotation={ object('activeAnnotation', activeAnnotation) }
			rootAnnotation={ object('rootAnnotation', rootAnnotation) }
			tags={PergamonUITags}
		/>
	)

createStory('Components/Keywords')
	.add('default', () =>
		<Keywords
			keywords={[
				{ weight: 0.9, terms: ['oliebol', 'africa'] },
				{ weight: 0.8, terms: ['brief', 'scherm'] },
				{ weight: 0.7, terms: ['opstapje', 'geheugen'] },
				{ weight: 0.7, terms: ['frituurpan', 'belasting'] },
				{ weight: 0.6, terms: ['softbal', 'vriend'] },
				{ weight: 0.4, terms: ['stopcontact'] },
				{ weight: 0.3, terms: ['afhaal'] },
				{ weight: 0.3, terms: ['vakantiepark'] },
				{ weight: 0.3, terms: ['pech'] },
				{ weight: 0.1, terms: ['rond', 'stoel', 'rsa', 'filter', 'groente'] },
			]}
			onClickKeyword={() => {}}
		/>
	)

createStoryWithKnobs('Components/Metadata')
	.add('default', () =>
		<Metadata rootAnnotation={rootAnnotation} />
	)

createStoryWithKnobs('Components/RenderedText')
	.add('default', () =>
		<RenderedText
			root={ object('rootAnnotation', rootAnnotation) }
			tags={PergamonUITags}
		/>
	)
	.add('active annotation', () =>
		<RenderedText
			activeAnnotation={ object('activeAnnotation', Object.assign({}, activeAnnotation)) }
			root={ object('rootAnnotation', rootAnnotation) }
			tags={PergamonUITags}
		/>
	)

createStory('Components/SemanticSuggestions')
	.add('default', () =>
		<SemanticSuggestions
			onClickSuggestion={() => {}}
			requesting={false}
			semanticSuggestions={[]}
		/>
	)
	.add('requesting', () =>
		<SemanticSuggestions
			onClickSuggestion={() => {}}
			requesting
			semanticSuggestions={[]}
		/>
	)
	.add('found', () =>
		<SemanticSuggestions
			onClickSuggestion={() => {}}
			requesting={false}
			semanticSuggestions={[
				{ text: 'reprehenderit', weight: 1 },
				{ text: 'pariatur', weight: 0.9 },
				{ text: 'occaecat', weight: 0.9 },
				{ text: 'tempor', weight: 0.7 },
				{ text: 'nostrud', weight: 0.6 },
				{ text: 'eiusmod', weight: 0.5 },
				{ text: 'quis', weight: 0.2 },
			]}
		/>
	)