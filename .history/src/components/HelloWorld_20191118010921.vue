<template>
<div class="container">
  <table cellpadding="10">  
      <tr><td rowspan="4">
        <div class="box" id="box2"></div>
      </td>
      <td rowspan="4" ><div class="line" id="line2"></div></td>
      <td rowspan="4"><div class="line" id="line1"></div></td>
      <td ><div class="line" id="line3"></div></td>      
      <td><div class="box" id="box1"></div>
      </td></tr>  
     <tr>
       <td ><div class="line" id="line3"></div></td>
      <td><div class="box" id="box1"></div>
      </td></tr>  
    <tr>
      <td ><div class="line" id="line3"></div></td>
    <td><div class="box" id="box1"></div>
      </td></tr>  
    <tr><td ><div class="line" id="line3"></div></td>
      <td><div class="box" id="box1"></div>
        </td></tr>  
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

.container{
  margin-left: 50px;
}
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
.box {
    border: 1px solid black;
    background-color: #ccc;
    width: 100px;
    height: 50px;
    position: relative;
}
.line {
    width: 1px;
    height: 255px;
    background-color: black;
    position: relative;
}
#box1 {
    top: 0;
    left: 30px;
}
#box2 {
    top: 0px;
    left: 0;
}
#box3 {
    top: 250px;
    left: 200px;
}
#line1 {
    top: 5px;
    bottom: 10px;
    left: 25px;
}
#line2 {
    height: 65px;
    left: 10px;

    transform: rotate(120deg);
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(120deg);
}
#line3 {
    height: 65px;
    left: 35px;

    transform: rotate(120deg);
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(120deg);
}
</style>
