<template>
	<div class="loginContainer">
		<div class="loginBox">
			<div class="loginBox_left">
				<h1>Management System</h1>
			</div>
			<div class="loginBox_right">
				<a-form>
					<a-form-item>
						<a-input v-model:value="username">
							<template #prefix>
								<user-outlined type="user"/>
							</template>
						</a-input>
					</a-form-item>
					<a-form-item>
						<a-input-password v-model:value="password">
							<template #prefix>
								<lock-outlined/>
							</template>
						</a-input-password>
					</a-form-item>
					<a-form-item>
						<a-checkbox v-model:checked="remember">Remember me</a-checkbox>
					</a-form-item>
					
					<a-form-item>
						<a-button type="primary" @click="login" block :loading="loading">login</a-button>
					</a-form-item>
				</a-form>
			</div>
		</div>
	</div>

</template>

<script>
import {LockOutlined, UserOutlined} from '@ant-design/icons-vue';

export default {
	components: {
		UserOutlined,
		LockOutlined
	},
	name: "login",
	data() {
		return {
			username: "admin",
			password: "admin",
			remember: false,
			loading: false,
			error: false,
			errorMessage: ""
		};
	},
	methods: {
		login() {
			this.loading = true;
			this.error = false;
			this.errorMessage = "";
			setTimeout(() => {
				this.loading = false;
				this.$router.push("/");
			}, 1000);
			
			
		}
	},
	
	
}
</script>

<style scoped>

.loginContainer {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	background-image: url("../assets/bg.jpg");
	background-size: cover;
}

.loginBox {
	display: flex;
	flex-direction: row;
	height: 500px;
	width: 700px;
	box-shadow: 0 0 10px rgba(31, 5, 5, 0.98);
}

.loginBox .loginBox_left {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50%;
	background-color: hsla(0, 0%, 0%, 0.25);
}

.loginBox_left h1 {
	font-size: 30px;
	color: #fff;
	
}

.loginBox .loginBox_right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	width: 50%;
	padding: 20px;
	background-color: white;
}


</style>