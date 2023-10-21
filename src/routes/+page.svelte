<script lang="ts">
    import type { PageData } from "./$types";

    export let data: PageData;

</script>



<img src="/ln-logo.jpg" alt="Linknexus logo" style="max-width: 600px;">
<h1>{data.title}</h1>
<p>{data.text}</p>
<p>{data.name}</p>

<form method="POST">
    <input type="text" name="name">
    <button type="submit">Submit</button>
</form>