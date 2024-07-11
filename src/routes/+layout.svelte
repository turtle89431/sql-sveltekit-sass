<script>
    /** @type {import('./$types').LayoutData} */
    export let data;
    import "$lib/sass/global.scss"
</script>
<div class="container">
    
    <slot ></slot>
</div>
<style>
    .container{
        width: 100%;
    }
</style>