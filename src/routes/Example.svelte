<script>
    export let table=[{tag:"div",classes:[""],html:"no data yet"}]
    
</script>

{#each table as {tag,classes,html} }
<svelte:element this={tag} class="{classes}" contenteditable="false" bind:innerHTML={html} />
    
{/each}