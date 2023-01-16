<script>
	import { fade } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import { navigating } from '$app/stores';
	import Project from '$lib/Project.svelte';

	let delay = 0;

	$: if ($navigating) {
		if ($navigating.from.pathname != '/') {
			delay = 500;
		}
	}

	const projects = [
		{
			title: 'Midterms Dashboard',
			img: '/thumbnails/hurricanes.jpg',
			year: '2022',
			balloon: 'ux-design',
			anno: 'UX/Design',
			width: 220,
			height: 150,
			top: -70,
			left: -5,
			angle: -12,
			desc: 'A dashboard exploring google trends interest in important topics ahead of the 2022 midterm elections'
		},
		{
			title: 'Neighborhoods',
			img: '/thumbnails/hurricanes.jpg',
			year: '2022',
			balloon: 'creative-direction',
			anno: 'Creative Direction',
			width: 240,
			height: 160,
			top: -50,
			left: 65,
			angle: 15,
			desc: 'A game for users to compare where they think neighborhood boundaries fall'
		},
		{
			title: 'Dataviz',
			img: '/thumbnails/hurricanes.jpg',
			year: '2021',
			balloon: 'dataviz',
			anno: 'Dataviz',
			width: 250,
			height: 140,
			top: -50,
			left: -5,
			angle: -15,
			desc: 'Various charts, maps, and graphics made for Axios'
		},
		{
			title: 'MCU',
			img: '/thumbnails/hurricanes.jpg',
			year: '2022',
			balloon: 'data-story-writing-design',
			anno: 'Data/Story/\nWriting/Design',
			width: 300,
			height: 210,
			top: -60,
			left: 55,
			angle: 10,
			desc: 'A visual story examining progress on diversity in MCU movies'
		},
		{
			title: 'Variants dashboard',
			img: '/thumbnails/hurricanes.jpg',
			year: '2021',
			balloon: 'design-code',
			anno: 'Design/Code',
			width: 290,
			height: 170,
			top: -50,
			left: -5,
			angle: -15,
			desc: 'A dashboard summarizing key info on coronavirus variants'
		},
		{
			title: 'Earthquakes',
			img: '/thumbnails/hurricanes.jpg',
			year: '2019',
			balloon: 'all-of-it-2',
			anno: 'All of it',
			width: 245,
			height: 140,
			top: -50,
			left: 60,
			angle: 20,
			desc: 'A visual story on remotely triggered earthquakes'
		},
		{
			title: 'Retired hurricanes',
			img: '/thumbnails/hurricanes.jpg',
			year: '2020',
			balloon: 'all-of-it',
			anno: 'All of it',
			width: 245,
			height: 140,
			top: -50,
			left: -5,
			angle: -17,
			desc: 'A visual story on the worst Atlantic hurricanes in history'
		},
	]
</script>

<section class="bg" in:fade={{ duration: 700, delay, easing: expoOut }}>
	<img class="title" src="/img/home_title.svg" alt="Will Chase" />
</section>

<section id="intro">
	<img id="venn" src="/img/venn_diagram.png" alt="A venn diagram with five categories that read: design, data, writing, story, code">
	<div class="intro-text">
	<p class="xl">Hi, I’m a visual journalist.</p>
	<p class="lg">That means I live here.</p>
	<p class="lg" style="color: var(--black10);">curious? <br>
		check out some of my work.
	</p>
	</div>
</section>

<section id="projects">
	<div class="right">
		{#each projects.filter((e, i) => i % 2) as project, i}
		<Project {...project}></Project>
		{/each}
		<div class="outro">
			<p class="xl" style="margin-top: 2rem; margin-bottom: 1rem; max-width: 600px;">want more?</p>
			<p class="dek" style="max-width: 600px;">Click those buttons down there to see even more of my work, read my essays and blogs, or learn more about me!</p>
		</div>
	</div>
	<div class="left">
		{#each projects.filter((e, i) => !(i % 2)) as project, i}
			<Project {...project}></Project>
		{/each}
	</div>
</section>

<style>
	section {
		background-color: var(--white98);
	}

	.bg {
		width: 100vw;
		height: 100vh;
		background-image: url('/img/home_bg.svg');
		background-repeat: no-repeat;
		background-size: cover;
	}

	#intro {
		padding: 5%;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: 1fr;
		gap: 1rem;
	}

	#projects {
		display: grid;
		padding: 0 5% 16rem 5%;
		grid-template-columns: repeat(2, 1fr);
		gap: 6rem;
	}
	.left {
		display: flex;
		flex-direction: column;
		gap: 6rem;
		grid-column: 1;
		grid-row: 1;
		align-self: center;
	}
	.right {
		display: flex;
		flex-direction: column;
		align-self: flex-end;
		gap: 6rem;
		grid-column: 2;
		grid-row: 1;
	}

	#venn {
		max-width: 700px;
		width: 100%;
		grid-column: 4 / 7;
		justify-self: end;
		grid-row: 1;
		align-self: center;
	}

	.title {
		position: absolute;
		max-width: 700px;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
		width: 100%;
	}

	.xl {
		font-size: clamp(2rem, 1rem + 2.5vw, 3.5rem);
		color: var(--black);
		font-family: "Forma DJR Display", sans-serif;
		font-weight: bold;
		text-transform: uppercase;
		line-height: 1;
		margin-top: 6rem;
	}

	.lg {
		font-size: clamp(1.4rem, 1rem + 1.5vw, 2.75rem);
		color: var(--black);
		font-family: "Forma DJR Display", sans-serif;
		font-weight: bold;
		text-transform: uppercase;
		line-height: 1;
		margin-top: clamp(2.5rem, 1rem + 4.5vw, 8rem);
	}
	.dek {
		font-family: "Forma DJR Deck", sans-serif;
		color: var(--black);
		font-size: 2rem;
		line-height: 1.1;
	}

	.intro-text {
		grid-column: 1 / 3;
		grid-row: 1;
	}
</style>
