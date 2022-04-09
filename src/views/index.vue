<template>
	<div class="container">
		<div class="header">
			<h1 style="margin-left: 20px">{{ title }}</h1>
		</div>
		<div class="box">
			<div class="menu"></div>
			<div class="content">
				<p>{{message}}</p>
				<span style="padding: 5px;margin: 5px;outline: red solid 1px;color: red;font-family: Arial;">{{message}}</span>
				<div style="padding-bottom: 2000px"></div>
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
			message: "data中的数据 sometimes",
			list: ["simon", "eric", "suancaiyu"],
			objClass: {
				title: "eric",
				content: "人类的赞歌就是勇气的赞歌"
			}
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

/*p {*/
/*	border-bottom-right-radius: 30px;*/
/*	border-style: solid;*/
/*	border-color: red;*/
/*	border-width: 5px;*/
/*	padding: 15px;*/
/*}*/

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

/*!*指div下的h1*!*/
/*div h1{*/
/*	color: red;*/
/*	text-align: center ;*/
/*}*/


/*!*通用选择器 此页面上所有标签都受这个影响*!*/
/**{*/
/*	color: rebeccapurple;*/
/*	text-align: center;*/
/*}*/
/*!*分组选择器，指div和h1都受此影响，用逗号来分隔每个选择器*!*/
/*div,h1{*/
/*	background-color: #F3F7FA;*/
/*}*/


.header {
	width: 100%;
	height: 100px;
	background-image: url("../assets/bg.jpg");
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
	border-radius: 10px;
	overflow-y: auto;
	top: 0;
	bottom: 0;
}

.menu {
	width: 200px;
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