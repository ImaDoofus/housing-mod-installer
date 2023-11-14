<script lang="ts">
	import { PROJECTS, Project } from '$lib/Projects';
	import { TAGS, type Tag } from '$lib/Tags';
	import ProjectWidget from '../components/ProjectWidget.svelte';

	let shownProjects: Project[] = [];
	let selectedTag: Tag = 'ChatTriggers';

	$: shownProjects = PROJECTS.filter((project) => project.tags.includes(selectedTag));
</script>

<svelte:head>
	<title>Housing Installer</title>
</svelte:head>

<div class="flex flex-col">
	<ul class="steps">
		<li class="step step-primary">Select Addons</li>
		<li class="step">Install</li>
		<li class="step">Solve Bugs</li>
		<li class="step">Done!</li>
	</ul>
	<div class="flex gap-2 p-8">
		<aside class="h-fit rounded-box bg-base-200 p-4">
			<h2>Filter</h2>
			<div class="divider my-0"></div>
			<div class="form-control">
				{#each TAGS as tag}
					<label class="label cursor-pointer">
						<span class="label-text mr-8">{tag}</span>
						<input
							class="radio radio-sm"
							type="radio"
							name="radio"
							value={tag}
							bind:group={selectedTag}
						/>
					</label>
				{/each}
			</div>
		</aside>
		<section class="flex max-h-full flex-1 flex-col gap-2 rounded-box bg-base-200 p-4">
			{#each shownProjects as project}
				<ProjectWidget {project} />
			{/each}
		</section>
	</div>
</div>
