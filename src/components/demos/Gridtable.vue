<template>
    <table>
        <thead>
            <tr>
                <th v-for="key in columns" @click='sortedBy(key)'>
                    {{key}} <span class='arrow' :class="rankType[key]"></span>
                </th>   
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in filterData">
                <td v-for="key in columns">{{item[key]}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            'columns': Array,
            'list': Array,
            'filterKey': String
        },
        data: function(){
            var rankType = {};
            this.columns.forEach(function(v, index){
                rankType[v] = 'up';
            })
            
            return {
                'rankType': rankType,
                'ranKey': ''
            }
        },
        computed: {
            filterData: function(){
                var list = this.list;
                var filterKey = this.filterKey;
                var ranKey = this.ranKey;
                var rank = this.rankType[ranKey];
                
                if(filterKey){
                    list = list.filter(function(row){
                        return Object.keys(row).some(function(key){
                            return (String(row[key]).toLowerCase().indexOf(filterKey) > -1);
                        })
                    })
                }

                if(ranKey){
                    list = list.slice().sort(function(a,b){
                        var key1 = a[ranKey];
                        var key2 = b[ranKey];
                        return ((key1===key2)?0 : (key1>key2) ? 1 : -1)*(rank=='up' ? 1 : -1);
                    })
                }

                return list;
            }
        },
        methods: {
            sortedBy: function(key){
                this.ranKey = key;
                this.rankType[key] = (this.rankType[key] == 'up') ? 'down' : 'up';
            }
        }
    }
</script>

<style lang='sass' scoped>

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
  margin:0.1rem;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.up {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.down {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>