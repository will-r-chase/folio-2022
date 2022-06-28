<script>
    import Title from '$lib/Title.svelte';
    import GradContainer from '$lib/GradContainer.svelte';
    import gsap from 'gsap';
	import { onMount } from 'svelte';
    import Potate from '$lib/Potate.svelte';
    import { Canvas } from "svelte-canvas";

    onMount(() => {
		const tl = gsap.timeline();
		const duration = 2;
		
        
	});
    
</script>


<GradContainer color="#FAC950">
    <Title img="rotato" alt="Rotato" margin="20" width="325"></Title>

    <Canvas width={500} height={500}>
        <!-- <Potate></Potate> -->
    </Canvas>
</GradContainer>

<style>
    .main-rotato {
        width: 70%;
        place-self: center;
    }
    .rotato-group {
        width: 40%;
        aspect-ratio: 1 / 1;
        place-self: center;
        display: grid;
        position: relative;
        border: 1px solid red;
    }
    .small-rotato {
        width: 50px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid black;
    }
</style>