<template>
  <div>
    <h1>{{this.extendName}}123</h1>
    <h1>{{this.age}}</h1>
  </div>
</template>

<script>
import {mapMutations,mapActions,mapState,mapGetters} from 'vuex';

export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  computed:{
    ...mapGetters(['extendName']),
    ...mapState({
      name: state => state.hello.name,
      age: state => state.hello.age
      }),
    
  },
  methods:{
    ...mapActions(['asyncIncreateAge']),
  },
  mounted(){
    console.log(this.$store.state.hello);
    this.asyncIncreateAge({num:2}).then(console.log('action finish'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
