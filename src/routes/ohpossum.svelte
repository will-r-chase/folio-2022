<script>
    import Title from '$lib/Title.svelte';
    import GradContainer from '$lib/GradContainer.svelte';
    import gsap from 'gsap';
    import {onMount} from 'svelte';

    onMount(() => {
        const tl = gsap.timeline();
		const duration = 2.5;

        tl.to(".god", {
            duration,
            left: "50%",
            repeat: -1,
            repeatDelay: 2,
            yoyo: true,
            ease: "linear",
        })
    })
</script>

<GradContainer color="#FFA7CB">
    <Title img="ohpossum" alt="Oh Possum!" margin="-40" width="623"></Title>
    <img src="/img/possum_bg.png" alt="A woman holding a possum on a san francisco street, the possum's arm is outstreached" class="possum">
    <img src="/img/god_bg.png" alt="God from Michaelangelo's 'the creation of adam'" class="god">
</GradContainer>

<style>
    .possum {
        position: absolute;
        width: auto;
        height: 70%;
        top: 58%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 40px;
    }
    .god {
        position: absolute;
        width: auto;
        height: 70%;
        top: 58%;
        left: 80%;
        transform: translate(-50%, -50%);
    }
</style>