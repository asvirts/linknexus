<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

</script>



<img src="/ln-logo.jpg" alt="Linknexus logo">
<h1>{data.title}</h1>
<p>{data.text}</p>