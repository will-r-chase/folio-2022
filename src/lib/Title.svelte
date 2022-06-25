<script>
    export let img = '';
    export let alt;
    export let margin = 0;
    export let width = 0;
</script>

<img src="/img/{img}_title.svg" alt="{alt}" style="transform: translate(-50%, {margin}px); width: {width * 0.8}px;">

<style>
    img {
        position: absolute;
        /* max-width: 300px; */
        top: 0;
        left: 50%;
        width: 100%;
    }
</style>