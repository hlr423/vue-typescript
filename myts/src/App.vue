<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/*编辑文档的标题样式*/
.title{
  .el-input__inner{
    height: 50px!important;
    border: 1px solid #ffffff!important;
  }
}
.el-calendar__body{
  padding: 0;
}
.el-calendar-table .el-calendar-day{
  height: 30px;
}
.el-calendar__header{
  display: inline;
}
</style>
