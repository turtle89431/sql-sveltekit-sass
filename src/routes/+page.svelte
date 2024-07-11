<script>
    import Example from "./Example.svelte";
export let data
console.log(data)
</script>

<h1>Welcome to SvelteKit with sqllite3 and sass</h1>
<Example table={data.table} />
