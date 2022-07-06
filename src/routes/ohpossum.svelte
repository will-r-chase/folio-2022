<script>
    import Title from '$lib/Title.svelte';
    import GradContainer from '$lib/GradContainer.svelte';
    import gsap from 'gsap';
    import {onMount} from 'svelte';

    onMount(() => {
        const tl = gsap.timeline(
            {repeat: -1,
            repeatDelay: 2});
		const duration = 2.5;

        tl.to(".god", {
            duration,
            left: "50%",
            ease: "linear",
        }).to(".possum", {
            duration: 0.5,
            filter: "saturate(130%) brightness(1.2) drop-shadow(0px 0px 40px #F4E65F)"
        }).to(".god", {
            duration,
            delay: 2,
            left: "80%",
            ease: "linear",
        }).to(".possum", {
            duration: 0.3,
            filter: "saturate(2%) brightness(1) drop-shadow(0px 0px 0px #F4E65F)"
        }, ">-2.3")
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
        filter: saturate(20%) brightness(1);
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