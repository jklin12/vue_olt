<template>
   <sidebar-menu :menu="menu" />
</template>

<script>

export default {
        data() {
            menu: [
                {
                    href: '/HelloWorld',
                    title: 'Dashboard',
                    icon: 'fa fa-user'
                },
                {
                    href: '/',
                    title: 'Charts',
                    icon: 'fa fa-chart-area'
                },
            ]
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
