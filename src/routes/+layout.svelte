<script>
	import Icon from '@iconify/svelte';
	import '../app.css';
</script>

<div class="flex h-screen flex-col">
	<header class="navbar">
		<a href="/" class="flex-1 text-lg font-bold">Housing Installer</a>
	</header>

	<main class="container mx-auto flex-1">
		<slot />
	</main>

	<footer class="footer items-center p-4 text-neutral-content">
		<aside class="grid-flow-col items-center gap-2">
			<!-- TODO: add website logo here if noah makes one -->
			<p>Copyright © {new Date().getFullYear()} Devaliance - All Rights Reserved.</p>
			<p>Made with ❤ by Devaliance</p>
			<!-- TODO: not affialiated message -->
		</aside>
		<nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
			<a class="flex items-center gap-1" href="about"><Icon icon="mdi:information" />Learn More</a>
			<!-- TODO: link to github page -->
			<a class="flex items-center gap-1" href="#"><Icon icon="mdi:github" />Contribute</a>
		</nav>
	</footer>
</div>
