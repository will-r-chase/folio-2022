<script>
    export let color = '#0589C7';
    export let direction = 'down';
    import { fade, scale } from 'svelte/transition';
    import { navigating } from '$app/stores';
    import { expoInOut, backOut, backIn } from 'svelte/easing';
    //orange #EF8C64
    //pink #FFA7CB
    //yellow #FAC950

    import gsap from 'gsap';
	const duration = 0.7;
    let outDuration = 500;

    $: if($navigating) {
        if($navigating.from.pathname == "/") {
            outDuration = 0;
        } else {
            outDuration = 500;
        }
    }
	
	function tweenIn (node) {
		let tl = gsap.timeline();
		
		tl.to(node, {
			duration,
            delay: duration,
			height: "0%"
		})

		return {
			/* GSAP's duration is in seconds. Svelte's is in miliseconds */
			duration: duration * 1000,
            delay: duration * 1000,
			tick: t => {
				tl.progress(t);
			}
		}
	}

    function tweenOut (node) {
		let tl = gsap.timeline();
		
		tl.from(node, {
			duration,
			height: "100%"
		})

		return {
			/* GSAP's duration is in seconds. Svelte's is in miliseconds */
			duration: duration * 1000,
			tick: t => {
				tl.progress(t);
			}
		}
	}
    
</script>

<article in:scale={{duration: 800, delay: outDuration, opacity: 1, easing: expoInOut}} out:scale={{duration: outDuration, opacity: 1, easing: backIn}} style="background: url('/img/noise.png'), linear-gradient({direction == "down" ? '180deg' : '360deg'}, {color} 0%, rgba(202, 210, 204, 0.44) 100%);">
    <slot></slot>
    <!-- <div class="cover" in:tweenIn out:tweenOut></div> -->
</article>

<style>
    article {
        position: relative;
        width: calc(100% - 3rem);
        height: calc(100% - 3rem);
        margin: 1.5rem;
        border-radius: 50px;
        background-blend-mode: soft-light;
        display: grid;
    }
    .cover {
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: 0;
        left: 0;
        background: var(--white95);
        z-index: 50;
    }
</style>