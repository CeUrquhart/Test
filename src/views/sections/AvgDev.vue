<template>
	<div
		class="section features-1"
		:class="{ 'bg-white': !theme, 'bg-primary': theme }"
	>
		<div class="container">
			<div style="margin: auto; width: 100%;">
				<div class="row">
					<div class="col-md-6 col-sm-12 p-5">
						<div style="height: 25px;"></div>

						<h3
							:class="{
								'text-white': theme,
								'text-black': !theme,
								'text-center': isMob
							}"
						>
							We will be your nerds.
						</h3>
						<p
							:class="{
								'text-white': theme,
								'text-black': !theme,
								'text-center': isMob
							}"
						>
							Most people starting a company don't know anything about how to
							get their brand created and run a successful online business or
							app. Others have a business who's internal processes aren't quite
							as fast as they should be.

							<br />
							That's where we step in. We can take your napkin sketch idea and
							take it to fruition. If you want your business to run faster with
							internal tools or to take your brand online we are a one stop
							shop.

							<br />Customer Research, Data Science, Conversion Optimization,
							Lead Generation, and all the other buzz words you probably don't
							know yet, that's our shit.
						</p>
						<button
							class="btn btn-default"
							style="width: 100%;"
							@click="getStarted"
						>
							<i class="ni ni-air-baloon text-white"></i> Get Started
						</button>
					</div>

					<div class="col-md-6 col-sm-12 p-5">
						<div class="floater row" v-for="(f, index) in nice" :key="index">
							<div class="col-2" v-if="!isMob">
								<img :src="f.icon" width="75%" height="50%" class="mt-2" />
							</div>
							<div class="col">
								<p
									class="h6"
									:class="{ 'text-white': theme, 'text-black': !theme }"
								>
									{{ f.text }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				windowWidth: window.innerWidth,
				nice: [
					{
						id: 0,
						text:
							"We use Customer Data & User Research to reach your target audience better",
						color: "success",
						icon:
							"https://s3.amazonaws.com/appforest_uf/f1611969842207x232641526642536130/Group%20181234.png"
					},
					{
						id: 1,
						text: "Data driven Lead Generation to increase Revenue",
						color: "yellow",
						icon:
							"https://s3.amazonaws.com/appforest_uf/f1611969829993x604026219231359000/Group%2015.png"
					},
					{
						id: 2,
						text:
							"A library of Internal Tools and custom made ones just for your company",
						color: "default",
						icon:
							"https://s3.amazonaws.com/appforest_uf/f1611969835143x805990645773859700/Group%2017.png"
					},
					{
						id: 3,
						text:
							"Rapid Design and Prototyping to get your project running quickly",
						color: "purple",
						icon:
							"https://s3.amazonaws.com/appforest_uf/f1611969823969x675137222589679600/Group%2014.png"
					}
				]
			};
		},
		computed: {
			theme() {
				return this.$store.state.lilbig.nightMode;
			},
			isMob() {
				return this.windowWidth < 500;
			}
		},
		methods: {
			getStarted() {
				this.$store.commit("deez/coldHeader");
				this.$router.push({ path: "/#main" });
			}
		},
		mounted() {
			window.onresize = () => {
				this.windowWidth = window.innerWidth;
			};
		}
	};
</script>
<style scoped>
	.floater {
		padding: 30px !important;
		box-shadow: inset 0px 0px 1px 1px #dedede !important;
		border-radius: 15px !important;
		margin-top: 15px !important;
	}
</style>
