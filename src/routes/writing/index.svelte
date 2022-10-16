<script context="module">
    export async function load( {fetch} ) {
        const res = await fetch('/writing/posts.json')
        const posts = await res.json()

        if(res.ok) {
            return {
                props: {
                    posts
                }
            }
        }

        return {
            status: res.status,
            error: new Error('Could not fetch posts')
        }
    }

</script>

<script>
    import Title from '$lib/Title.svelte';
    import GradContainer from '$lib/GradContainer.svelte';
    import writing from '../../../static/external_writing.json';

    export let posts;

    const writing2 = writing.map(d => {
        return {
            title: d.name,
            post_type: d.post_type,
            link: d.link,
            date_raw: new Date(d.date),
            date: new Date(d.date).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"})
        }
    })

    const posts2 = posts.posts.map(d => {
        return {
            title: d.title,
            post_type: d.post_type,
            date_raw: new Date(d.date_raw),
            date: d.date,
            summary: d.summary,
            image: d.image,
            slug: d.slug
        }
    })

    const posts_combined = [...posts2, ...writing2].sort((a, b) => (a.date_raw - b.date_raw)).reverse()

    //console.log(posts_combined)
</script>

<GradContainer direction="up">
    <Title img="writing" alt="Writing" margin="20" width="421"></Title>
    <img src="/img/tree1.png" alt="A pine tree" class="tree1">
    <img src="/img/tree2.png" alt="A pine tree" class="tree2">

    <ul role="list">
    {#each posts_combined as post}
    <li>
        {#if post.slug}
        <a href="/writing/{post.slug}">{post.title}</a>
        {:else}
        <a href="{post.link}">{post.title}</a>
        {/if}
        <p class="type">{post.post_type}</p>
        <p class="date">{post.date}</p>
    </li>
    {/each}
    </ul>
</GradContainer>

<style>
    ul {
        padding: 150px 1rem 50px 1rem;
        width: 100%;
        overflow-y: scroll;
    }
    a {
        grid-area: title;
        color: var(--black10);
        text-decoration: none;
        text-transform: uppercase;
        font-size: 1.875rem;
        font-family: "Forma DJR Display", "Helvetica", sans-serif;
        font-weight: bold;
        line-height: 1.1;
    }
    a::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    p {
        font-family: "Tekst Mono", monospace;
        font-size: 1rem;
        letter-spacing: 0.05em;
        color: var(--black10);
        text-transform: uppercase;
    }
    .type {
        grid-area: type;
        justify-self: right;
        text-align: right;
    }
    .date {
        grid-area: date;
        justify-self: right;
        text-align: right;
    }
    li {
        position: relative;
        width: 100%;
        margin-bottom: 1rem;
        padding: 1rem 2rem 1rem 2rem; 
        background: var(--white98);
        border-radius: 20px;
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: 1fr 1fr;
        gap: 0 2rem;
        grid-template-areas: "title type"
                             "title date";
        align-items: center;
    }
    .tree1 {
        position: absolute;
        right: 0%;
        top: 0%;
        width: clamp(40px, 60px + 13vw, 200px);
        transform: translate(-30px, 0) rotate(180deg);
    }
    .tree2 {
        position: absolute;
        left: 0%;
        bottom: 10%;
        width: clamp(150px, 150px + 13vw, 420px);
        transform: translate(42%, 35%) rotate(90deg);
    }
</style>