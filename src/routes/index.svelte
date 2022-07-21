<script>
    import {fade} from 'svelte/transition';
    import {expoOut} from 'svelte/easing';
    import { navigating } from '$app/stores';


    let delay = 0;

    $: if($navigating) {
        if($navigating.from.pathname != "/") {
            delay = 500;
        } 
    }
</script>


<div class="bg" in:fade={{duration: 700, delay, easing: expoOut}}>
    <img src="/img/home_title.svg" alt="Will Chase">
</div>

<style>
    .bg {
        width: 100vw;
        height: 100vh;
        background-image: url('/img/home_bg.svg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    img {
        position: absolute;
        max-width: 700px;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        width: 100%;
    }
</style>
