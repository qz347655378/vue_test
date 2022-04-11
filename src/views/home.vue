<template>
  <div class="container">
	<div class="header">
	  <h1 style="margin-left: 20px">{{ title }}</h1>
	</div>
	<div class="box">
	  <div class="menu">
		<a-menu v-model:selected-keys="selectedKeys" :open-keys="openKeys" mode="inline">
		  <a-sub-menu v-for="item in menu" v-model:key="item.menuId">
			<template #title>
			  {{ item.menuName }}
			</template>
			<a-menu-item v-for="c in item.menus" v-model:key="c.key">{{ c.title }}</a-menu-item>
		  </a-sub-menu>
		</a-menu>
	  </div>
	  <div class="content">
		<router-view></router-view>
	  </div>
	</div>
	<div class="footer"></div>
  </div>

</template>

<script>
export default {
  name: "index",
  data() {
	return {
	  title: "管理系统",
	  menu: [
		{
		  menuName: "menu1", menuId: "menu1", menus: [
			{
			  "key": "1",
			  "title": "Option 1"
			},
			{
			  "key": "2",
			  "title": "Option 2"
			},
			{
			  "key": "3",
			  "title": "Option 3"
			},
			{
			  "key": "4",
			  "title": "Option 4"
			}
		  ]
		},
		{
		  menuName: "menu2", menuId: "menu2", menus: [
			{key: 5, title: "Option 5"},
			{key: 6, title: "Option 6"},
		  ]
		},
		{
		  menuName: "menu3", menuId: "menu3", menus: []
		}

	  ],

	  openKeys: ["menu1"],
	  selectedKeys: ["menu1"],
	}
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: #F3F7FA;
  background-repeat: no-repeat;
  background-size: cover;
  /*背景图片不随内容滚动*/
  background-attachment: fixed;
}


* {
  color: white;
}


/*注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。*/
.box {
  width: 100%;
  top: 100px;
  bottom: 50px;
  display: -webkit-flex; /*兼容safari*/
  display: flex;
  flex-flow: row nowrap; /*flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。*/
  position: fixed;
  box-sizing: border-box;
}


.header {
  width: 100%;
  height: 100px;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  text-align: left;
  line-height: 100px;
  color: white;

}


.content {
  width: 100%;
  margin: 8px;
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-flow: column;
  background-color: white;
  overflow-y: auto;
  top: 0;
  bottom: 0;
}

.menu {
  width: 256px;
  height: 100%;
  background-color: white;
}

.footer {
  width: 100%;
  height: 50px;
  bottom: 0;
  position: absolute;
  background-color: white;
}


</style>