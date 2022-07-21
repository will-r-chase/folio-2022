<script>
    import Title from '$lib/Title.svelte';
    import GradContainer from '$lib/GradContainer.svelte';
</script>

<GradContainer color="#EF8C64">
    <Title img="about" alt="Hello!" margin="-35" width="290"></Title>
    <img src="/img/cactus1.png" alt="A cactus" class="cactus1">
    <img src="/img/cactus2.png" alt="A cactus" class="cactus2">
    <div class="grid-wrapper">
    <p><b>I’m Will</b> 👋 I tell stories with more than just words. Currently, I’m the Visual Stories Editor at Axios. I design websites and other things, write code, and make art. Sometimes I freelance—I’ve worked with [impressive company 1], [impressive company 2], and [company no one has heard of]. I also help run a dataviz learning community called <a href="https://www.elevatedataviz.com/" target="_blank">Elevate</a>.</p>
    <p class="contact">
        💌 hello@williamrchase.com <br>
        🐦 <a href="https://twitter.com/W_R_Chase" target="_blank">@W_R_Chase</a>
    </p>
    </div>
</GradContainer>

<style>
    .grid-wrapper {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-auto-rows: min-content;
        padding-top: 180px;
    }
    .cactus2 {
        position: absolute;
        left: 45%;
        bottom: 0%;
        width: clamp(120px, 120px + 13vw, 270px);
        transform: translate(-50%, 0);
        margin-bottom: 0;
    }
    .cactus1 {
        position: absolute;
        right: 0%;
        top: 30%;
        width: clamp(50px, 50px + 10vw, 150px);
        transform: translate(-92%, -50%) rotate(-90deg);
    }
    p {
        font-family: "Forma DJR Text", "Helvetica", sans-serif;
        font-size: 1.25rem;
        line-height: 1.4;
        color: var(--black10);
        background-color: var(--white98);
        border-radius: 40px;
        max-width: 500px;
        padding: 32px;
        height: fit-content;
        z-index: 10;
        grid-column: 1 / 7;
        margin-bottom: 1rem;
        margin-left: 5%;
    }
    .contact {
        text-align: center;
        line-height: 1.75em;
    }

    a {
        color: var(--blue);
    }
</style>
