<script>
    export let title;
    export let date;
    export let summary;
    export let image;
    export let color = "#0589C7";
    // #1E8859 green
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title}/>
  <meta property="og:description" content="{summary}"/>
  <meta property="og:image" content="/img/blog/{image}" />
</svelte:head>

<div class="blog-bg" style="background: url('/img/noise.png'), linear-gradient(180deg, {color} 0%, rgba(202, 210, 204, 0.44) 100%);">
  <article class="blog">
    <img src="/img/mountains.png" alt="A snow capped mountain range" class="mountains-top">
    <h1 class="blog-title">{ title }</h1>
    <p class="date">{ new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"}) }</p>
    <slot>
        <!-- the mdsvex content will be slotted in here -->
    </slot>
    <img src="/img/mountains.png" alt="A snow capped mountain range" class="mountains-bottom">

  </article>
</div>

  <style>
      article {
          overflow-y: scroll;
          background-color: white;
          border-radius: 50px;
          padding: clamp(20px, 20px + 12vw, 200px) 1rem;
          /* padding-bottom: clamp(20px, 20px + 12vw, 200px); */
          position: relative;
          max-width: 1400px;
          margin: auto;
      }
      .blog-bg {
          padding: 1.5rem;
      }
      .blog-title {
          position: relative;
          z-index: 5;
      }
      .mountains-top {
          position: absolute;
          top: 0;
          left: 0;
          max-width: 100%;
          width: 100%;
          border-radius: 50px;
          transform: rotate(180deg);
      }
      .mountains-bottom {
          position: absolute;
          bottom: 0%;
          left: 0;
          max-width: 100%;
          width: 100%;
          border-radius: 50px;
          margin-bottom: 0;
      }
  </style>
