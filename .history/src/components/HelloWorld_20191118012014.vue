<template>
<div class="container">
  <table cellpadding="10">  
      <tr><td rowspan="4">
        <div class="box" id="box2">
          <p>OLT</p></div>
      </td>
      <td rowspan="4" ><div class="line" id="line2"></div></td>
      <td rowspan="4"><div class="line" id="line1"></div></td>
      <td ><div class="line" id="line3"></div></td>      
      <td><div class="box" id="box1"><p>ONT</p></div></td>
      <td cellpadding="50"><div class="circleBase type2"></div>
      </td></tr>  
     <tr>
       <td ><div class="line" id="line3"></div></td>
      <td><div class="box" id="box1"><p>ONT</p></div>
      </td></tr>  
    <tr>
      <td ><div class="line" id="line3"></div></td>
    <td><div class="box" id="box1"><p>ONT</p></div>
      </td></tr>  
    <tr><td ><div class="line" id="line3"></div></td>
      <td><div class="box" id="box1"><p>ONT</p></div>
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
.circleBase {
    border-radius: 50%;
}

.type1 {
    width: 100px;
    height: 100px;
    background: yellow;
    border: 3px solid red;
}
.type2 {
    width: 10px;
    height: 10px;
    background: #ccc;
    border: 3px solid #000;
}

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
    top: 0px;
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
