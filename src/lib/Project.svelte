<script>
    export let img;
    export let alt;
    export let desc;
    export let balloon;
    export let anno;
    export let year;
    export let width;
    export let height;
    export let top;
    export let left;
    export let angle;
</script>


<!-- rewrite this as subgrid to get the half-drop layout -->
<figure>
    <span class="balloon" style="background-image: url('/img/{balloon}-balloon.png'); width: {width}px; height: {height}px; top: {top}px; left: {left}%; transform: rotate({angle}deg);">{anno}</span>
    <img src="/img/{img}" alt="{alt}">
    <figcaption>{desc}</figcaption>
</figure>

<style>
    figure {
        justify-self: center;
        width: 100%;
        max-width: 600px;
        position: relative;
    }
    img {
        width: 100%;
        border-radius: 40px;
    }
    figcaption {
        font-family: 'Forma DJR Text', sans-serif;
        font-size: 1rem;
        color: var(--black20);
        margin-top: 0.5rem;
        line-height: 1.2;
        text-align: center;
    }
    .balloon {
        font-family: 'Tekst Mono', monospace;
        font-size: 1.5rem;
        line-height: 1.1;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--white98);
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 15;
        position: absolute;
        display: grid;
        align-content: center;
    }
</style>