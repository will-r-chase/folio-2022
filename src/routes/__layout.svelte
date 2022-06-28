<script>
    import '../styles/global.css';
    import '../styles/fonts.css';

    const lucky_options = ["plopcorn", "ohpossum", "rotato"]
    let lucky = "plopcorn";
    function randomizeLuck() {
        lucky = lucky_options[Math.floor(Math.random() * lucky_options.length)];
    }
</script>

<nav>
    <ul role="list">
        <li><a href="/" class="caption breakout">home</a></li>
        <li><a href="/projects" class="caption breakout">projects</a></li>
        <li><a href="/writing" class="caption breakout">writing</a></li>
        <li><a href="/about" class="caption breakout">about</a></li>
        <li><a href="/{lucky}" on:click={randomizeLuck} class="caption breakout">i'm feeling lucky</a></li>
    </ul>
</nav>
<main>
    <slot></slot>
</main>

<style>
    main {
        width: 100%;
        height: 100%;
    }

    nav {
        position: absolute;
        width: 90%;
        margin: auto;
        bottom: 5%;
        left: 0;
        right: 0;
        padding: 16px 48px;
        background: var(--gold);
        border-radius: 999px;
        z-index: 999;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    li {
        background: var(--white98);
        border-radius: 999px;
        padding: 12px 32px;
        position: relative;
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