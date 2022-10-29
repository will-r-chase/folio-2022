<script>
    import Title from '$lib/Title.svelte';
    import GradContainer from '$lib/GradContainer.svelte';
    import projects from '../../../static/projects.json';
</script>

<GradContainer>
    <Title img="projects" alt="Projects" margin="20" width="482"></Title>
    <img src="/img/buttes1.png" alt="A butte" class="butte1">
    <img src="/img/buttes2.png" alt="A butte" class="butte2">
    <ul role='list' class="grid-wrapper">
        {#each projects as project}
            <li class="project" style="background-image: url('/img/thumbnails/{project.img}.jpg')"><a data-content="{project.name}" href="{project.link}">{project.name}</a></li>
        {/each}
    </ul>
</GradContainer>

<style>
    .grid-wrapper {
        width: calc(100% - 4rem);
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        padding: 0;
        margin: 0 2rem 0 2rem;
        padding: 170px 0 50px 0;
        z-index: 2;
        overflow-y: scroll;
    }
    .project {
        min-width: 250px;
        aspect-ratio: 1 / 1;
        border-radius: 30px;
        display: grid;
        place-items: center;
        padding: 0.8rem;
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }
    a {
        font-family: "Forma DJR Display", "Helvetica", sans-serif;
        font-size: 2rem;
        text-transform: uppercase;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
        line-height: 1.2em;
        color: var(--white98);
        position: relative;
        z-index: 0;
        /* -webkit-text-stroke: 1.5px var(--black10); */
    }
    a::after {
        content: attr(data-content);
        position: absolute;
        -webkit-text-stroke: 0.1em var(--black);
        left: 0;
        top: 0;
        z-index: -1;
    }
    a::before {
        content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
    }

    .butte1 {
        position: absolute;
        left: 55%;
        bottom: 0%;
        width: clamp(220px, 220px + 13vw, 500px);
        transform: translate(-50%, 0);
        margin-bottom: 0;
    }
    .butte2 {
        position: absolute;
        left: 0%;
        top: 30%;
        width: clamp(140px, 140px + 13vw, 300px);
        transform: translate(-11px, -50%) rotate(90deg);
    }
</style>