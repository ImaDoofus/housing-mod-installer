import type { Tag } from './Tags';

export class Project {
	constructor(
		public name: string,
		public description: string,
		public url: string,
		public image: string,
		public tags: Tag[],
		public creation: Date,
		public isSelected: boolean = false
	) {}
}

export const PROJECTS = [
	new Project(
		'Housing Editor',
		'Popular housing mod',
		'https://housingeditor.com/',
		'https://picsum.photos/200',
		['ChatTriggers', '1.8.9', '1.20'],
		new Date()
	),
	new Project(
		'test',
		'test',
		'https://housingeditor.com/',
		'https://picsum.photos/200',
		['ChatTriggers'],
		new Date()
	)
];
