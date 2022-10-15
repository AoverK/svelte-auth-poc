<script lang="ts">

    async function data() {
    const url = `https://api.coingecko.com/api/v3/search/trending`;
    const response = await (await fetch(url)).json();
    
    return await response.coins;
}


    
</script>

<div class="flex items-center  h-screen">
    <!-- <div class="container mx-auto">
    <h1 class="text-2xl font-bold underline">
        Crypto Trending Table
    </h1>
    </div> -->
    
    <div class="mx-auto">
        <h1 class="text-2xl font-bold underline content-center">
            Crypto Trending Table
        </h1>
        <table class="w-80 table-auto border border-slate-500">
            
        <thead>
            <tr>
                <th class="border border-slate-600">Name</th>
                <th class="border border-slate-600">Symbol</th>
            </tr>
        </thead>
        <tbody>
            {#await data() }
            <p>...waiting</p>
            {:then response}
            
            {#each response as r}
            <tr>
                <td class="border border-slate-700 ...">{r.item.name }</td>
                <td class="border border-slate-700 ...">{r.item.symbol }</td>
            </tr>
            {/each}
            {/await}
        </tbody>
    </table>
    </div>

    
</div>

