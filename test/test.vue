<template>
  <div>
    <p>{{ person.name.address > m && person.name === 'node'? "¥":'' }} World!</p>
    <p :class="{active : list[0]}">
      {{ person.name.address }}
    </p>
    <div>
      ¥
    </div> 
    <div v-for="item in list[0].product" :key="item.id.aaa">
      ¥
    </div>
  </div>
</template>


<script>
const arr = []
export default {
  data(){
    return {
      person: {
        name: 'lily',
        age: '10',
        money: '¥3'
      },
      list: ['¥'],
      products: [],
      flag: false,
      stu: '¥',
      name: 'test',

    }
  },
  mounted () {
    let obj = {
      age: 3,
      name: '¥32.45'
    }
    let temp = '¥34.56'
    let stu = false
    this.name = this.product || this.$route.query.person || stu || arr[0] || '¥'
    this.person.money =  obj.age >2? obj.name: temp >2? '¥3.4':''
    this.temp = `${this.person.name}${this.person.age}`
  
  }
}
</script>


<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>

 

