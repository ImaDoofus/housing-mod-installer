<script lang="ts">
	import type { Project } from '$lib/Projects';
	import Icon from '@iconify/svelte';

	export let project: Project;
</script>

<div class="flex justify-between rounded-box bg-base-300 p-4" bg-primary={project.isSelected}>
	<div class="flex flex-col gap-4 md:flex-row">
		<img class="h-32 w-32 rounded" src={project.image} alt={project.name} />
		<div class="flex flex-col">
			<div class="flex items-center gap-2">
				<a
					class="text-2xl font-bold text-blue-400 hover:text-blue-200
                "
					href={project.url}
					target="_blank"
					rel="noopener noreferrer">{project.name}</a
				>
				{#each project.tags as tag}
					<span class="badge badge-outline">{tag}</span>
				{/each}
			</div>
			<p>{project.description}</p>
			<p>Created on {project.creation.toLocaleDateString()}</p>
		</div>
	</div>
	<button class="btn btn-primary text-xl" on:click={(project.isSelected = true)}>
		<Icon icon="mdi:plus" />Add
	</button>
</div>
