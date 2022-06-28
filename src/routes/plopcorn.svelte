<script>
    import Title from '$lib/Title.svelte';
    import GradContainer from '$lib/GradContainer.svelte';
    import Physiks from '$lib/Physiks.svelte';

    let w;
    let h;

</script>

<!-- <div class="wrapper" bind:clientWidth={w} bind:clientHeight={h}> -->
<GradContainer>
    <Title img="plopcorn" alt="Plopcorn" margin="20" width="549"></Title>
    <Physiks></Physiks>
</GradContainer>
<!-- </div> -->