<script>
    import Title from '$lib/Title.svelte';
    import GradContainer from '$lib/GradContainer.svelte';
</script>

<GradContainer color="#EF8C64">
    <Title img="about" alt="Hello!" margin="-35" width="290"></Title>
    <img src="/img/cactus1.png" alt="A cactus" class="cactus1">
    <img src="/img/cactus2.png" alt="A cactus" class="cactus2">
    <div class="grid-wrapper">
    <p><b>I’m Will</b> 👋 I tell stories with more than just words. Currently, I’m the Visual Stories Editor at Axios. I design websites, charts, and other things; I write code and words; and I spend a lot of time cozying up with a good spreadsheet. I also freelance and do a lot of teaching. If you wanna chat just send me a note, I’d love to hear from you!</p>
    <p class="contact">
        💌 hello@williamrchase.com 💌<br>
        🐦 <a href="https://twitter.com/W_R_Chase" target="_blank">@W_R_Chase</a> 🐦
    </p>
    <ul class="shill" role="list">
        <span class="shill-title">shill corner</span>
        <li><a href="https://bestnewsletter.cool/" target="_blank">sign up for my newsletter</a></li>
        <li><a href="" target="_blank">take my design course</a></li>
        <li><a href="https://www.elevatedataviz.com/" target="_blank">join my learning community</a></li>
    </ul>
    </div>
</GradContainer>

<style>
    .grid-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-rows: repeat(9, 1fr);
        gap: 24px;
        padding: 180px 5% 50px 5%; 
        overflow-y: scroll;
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
        grid-column: 1 / 6;
        grid-row: 1 / 6;
        margin-bottom: 1rem;
    }
    .contact {
        text-align: center;
        line-height: 1.75em;
        grid-row: 7 / -1;
        align-self: end;
        margin-bottom: 0;
    }
    .shill-title {
        font-family: 'Tekst Mono', monospace;
        font-size: 1.5rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--white98);
        background-image: url("/img/spike-balloon.png");
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 15;
        width: 300px;
        height: 115px;
        position: absolute;
        top: -100px;
        right: -65px;
        transform: rotate(10deg);
        display: grid;
        align-content: center;
    }
    ul {
        z-index: 10;
        grid-column: 6 / -1;
        grid-row: 1 / -1;
        justify-self: end;
        align-self: end;
        margin-bottom: 0;
        position: relative;
    }
    li {
        background-color: var(--white98);
        border-radius: 40px;
        max-width: 500px;
        height: fit-content;
        margin-bottom: 1rem;
        text-align: center;
    }
    li:last-of-type {
        margin-bottom: 0;
    }

    li > a {
        font-family: "Forma DJR Deck", "Helvetica", sans-serif;
        font-size: clamp(0.8rem, 0.8rem + 1.1vw, 1.75rem);
        text-transform: uppercase;
        text-decoration: none;
        font-weight: bold;
        line-height: 1.2em;
        color: var(--red);
        display: block;
        padding: 32px;
    }

    a {
        color: var(--blue);
    }
</style>
