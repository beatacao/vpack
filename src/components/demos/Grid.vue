<template>
    <div>
        <form>
            <input type="text" name="filterKey" v-model='filterKey' id="" placeholder='filter word' />
        </form>
        <Gridtable :filter-key="filterKey" :columns="columns" :list="list"></Gridtable>
    </div>
</template>

<script>
    import Gridtable from './Gridtable.vue'

    export default {
        data () {
            return {
                'filterKey': '',
                'columns': ['name', 'power'],
                'list': [
                    { name: 'Chuck Norris', power: Infinity },
                    { name: 'Bruce Lee', power: 9000 },
                    { name: 'Jackie Chan', power: 7000 },
                    { name: 'Jet Li', power: 8000 }
                ]
            }
        },
        components: {
            Gridtable
        }
    }
</script>

<style>
input[type='text']{
    padding:4px 10px; border:1px solid #ccc; font-size:14px; 
    width:3rem; height:0.3rem;
    margin: 0.1rem;
}
</style>