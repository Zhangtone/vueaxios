<template>
	<div id="maxbox">

		<input type="text" name="" id="" v-model="region" />
		<!--關鍵字輸入框-->
		<input type="button" @click="dbdata" value="調戲機器人" />
		<!--發送關鍵字-->
		<div id="box">
			<!--回复循环-->
			<ul>
				<li v-for="Reply1 in data">
					<p id="liright"><span>我:</span> {{Reply1.Reply2}} </p>
					<p id="lileft"><span id="">
				Reply:
			</span> {{Reply1.Reply1}} </p>

				</li>

			</ul>

		</div>

	</div>

</template>
<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				region: '',
				data: [],

			}

		},

		methods: {
			dbdata() {
				var region1 = this.region
				var url1 = 'https://bird.ioliu.cn/v1?url=http://api.jisuapi.com/iqa/query?appkey=70817d82fc0e56ef&question='
				axios.get(url1 + region1)
					.then(
						function(response) {
							console.log(response);
							var content = response.data.result.content;
							this.Reply = content;
							if(this.Reply = response.data.result.content) {
								this.data.push({
									Reply2: region1,
									Reply1: content,
								})

							}

						}.bind(this))
					.catch(function(error) {
						console.log(error);
						alert("鏈接機器人失敗，請聯繫管理員")

					})

			},

		}
	}
</script>
<style type="text/css">
	* {
		margin: 0px;
		padding: 0px;
	}
	
	html,
	body {
		background-color: #42B983;
	}
	
	#box {
		background-color: #2C3E50;
		color: aliceblue;
		width: 60%;
		height: 80%;
		margin: 10px auto;
		padding: 50px 0px 50px 0px;
		
	}
	
	#maxbox>input[type="text"] {
		border-radius: 50px;
		padding: 8px;
		border: 0px #42B983 solid;
	}
	
	#maxbox>input[type="button"] {
		border-radius: 50px;
		padding: 8px;
		border: 0px #42B983 solid;
	}
</style>