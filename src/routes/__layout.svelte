<script>
    import '../styles/global.css';
    import '../styles/fonts.css';
    import '../styles/code.css';
    import { page } from '$app/stores';
    import { scale } from 'svelte/transition';

    const lucky_options = ["plopcorn", "ohpossum", "rotato"]
    let lucky = "plopcorn";
    function randomizeLuck() {
        lucky = lucky_options[Math.floor(Math.random() * lucky_options.length)];
    }
    
    let expanded = false;

    if($page.url.pathname == "/") {
        expanded = true;
    } 
    function handleMouseover() {
            expanded = true;
    }
    function handleMouseout() {
        setTimeout(() => {
            if($page.url.pathname == "/") {
                expanded = true;
            } else {
                expanded = false;
            }
        }, "1000")
    }

    //todo
    //mobile / responsive
</script>


<!-- svelte-ignore a11y-mouse-events-have-key-events -->

    <nav class:expanded on:mouseover={handleMouseover} on:mouseleave={handleMouseout}>
        {#if expanded}
            <ul role="list" out:scale={{duration: 200, delay: 100}}>
                <li in:scale={{duration: 200, delay: 200}}><a href="/" class="caption breakout">home</a></li>
                <li in:scale={{duration: 200, delay: 225}}><a href="/projects" class="caption breakout">projects</a></li>
                <li in:scale={{duration: 200, delay: 250}}><a href="/writing" class="caption breakout">writing</a></li>
                <li in:scale={{duration: 200, delay: 275}}><a href="/about" class="caption breakout">about</a></li>
                <li in:scale={{duration: 200, delay: 300}}><a href="/{lucky}" on:click={randomizeLuck} class="caption breakout">press me</a></li>
            </ul>
            {:else}
            <div class="menu" in:scale={{duration: 200, delay: 250}} out:scale={{duration: 200, delay: 50}}>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        {/if}
    </nav>


<main>
    <slot></slot>
</main>

<style>
    main {
        width: 100%;
        height: 100vh;
        display: inline-block;
        position: relative;
    }

    nav {
        position: fixed;
        width: 75.5px;
        height: 75.5px;
        bottom: 5%;
        left: 5%;
        background: var(--gold);
        border-radius: 50%;
        z-index: 999;
        transition: all 300ms cubic-bezier(0.770, 0.000, 0.175, 1.000); /* easeInOutQuart */
        overflow: hidden;
        display: grid;
        align-items: center;
    }

    .expanded {
        width: 90%;
        height: 75.5px;
        border-radius: 999px;
        transition: width 300ms cubic-bezier(0.770, 0.000, 0.175, 1.000); /* easeInOutQuart */
    }

    ul {
        display: flex;
        flex-direction: row;
        /* flex-wrap: wrap; */
        justify-content: space-between;
        align-items: center;
        margin: 16px 48px;
        padding: 0;
    }

    li {
        background: var(--white98);
        border-radius: 999px;
        padding: 12px clamp(12px, 12px + 1vw, 32px);
        position: relative;
        white-space: nowrap;
    }

    .menu {
        background: var(--white98);
        border-radius: 999px;
        width: 50px;
        height: 50px;
        display: grid;
        place-items: center;
        justify-self: center;
        padding: 12px 0;
    }

    .bar {
        background: #333333;
        width: 24px;
        height: 3px;
        border-radius: 999px;
    }

    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
        text-align: center;
    }

    .breakout::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>