<template>
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h3
					class="text-center"
					:class="{ 'text-white': theme, 'text-black': !theme }"
				>
					Some Brands We've Worked With
				</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-md-3 col-sm-12" v-for="(l, index) in logos" :key="index">
				<a :href="l.url_text" target="_blank">
					<div
						class="img"
						:style="{ backgroundImage: 'url(' + l.logo_url_text + ')' }"
					>
						<div class="spacer"></div>
					</div>
				</a>
			</div>
		</div>
		<div class="spacer"></div>
	</div>
</template>
<script>
	export default {
		computed: {
			logos() {
				return this.$store.state.lilbig.clients;
			},
			theme() {
				return this.$store.state.lilbig.nightMode;
			},
			color() {
				if (this.$store.state.lilbig.nightMode) {
					return "white";
				} else {
					return "black";
				}
			}
		},
		created() {
			this.$store.dispatch("lilbig/fetchClients");
		}
	};
</script>
<style scoped>
	.spacer {
		height: 200px !important;
	}
	.img {
		background-position: center !important;
		background-repeat: no-repeat !important;
		background-size: contain !important;
	}
</style>
