<script>
    import {Layer} from "svelte-canvas";
    import { browser } from '$app/env'; 
    
    let image;

    $: if (browser) {
        // code here runs only on the browser
        image = new Image();
        image.src = 'https://upload.wikimedia.org/wikipedia/commons/9/9b/DVD_logo.svg';
        render = ({ context, width, height}) => {
            context.drawImage(image, width / 2, height / 2, width / 2, height / 2); 
        }
    }


</script>

<Layer {render} />