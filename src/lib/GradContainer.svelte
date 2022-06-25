<script>
    export let color = '#0589C7';
    export let direction = 'down';
    //orange #EF8C64
    //pink #FFA7CB
    //yellow #FAC950
</script>

<article style="background: url('/img/noise.png'), linear-gradient({direction == "down" ? '180deg' : '360deg'}, {color} 0%, rgba(202, 210, 204, 0.44) 100%);">
    <slot></slot>
</article>

<style>
    article {
        position: relative;
        width: calc(100% - 3rem);
        height: calc(100% - 3rem);
        margin: 1.5rem;
        border-radius: 50px;
        background-blend-mode: soft-light;
    }
</style>