<template>
<div class="container">
  <table>  
    <tr><th>First_Name</th><th>Last_Name</th><th>Marks</th></tr>  
    <tr><td rowspan="4">Sonoo</td><td>Jaiswal</td><td>60</td></tr>  
    <tr><td>William</td><td>80</td></tr>  
    <tr><td>Sironi</td><td>82</td></tr>  
    <tr><td>Singh</td><td>72</td></tr>  
  </table>  
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
