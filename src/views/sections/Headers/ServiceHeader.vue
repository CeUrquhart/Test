<template>
	<div :class="{ 'bg-primary': theme, 'bg-white': !theme }" class="p-4 ">
		<div class="container p-4">
			<div style="height: 100px;"></div>

			<div class="row align-items-center text-left">
				<div class="col-lg-6 col-12">
					<p
						class=" h4 text-left"
						:class="{
							'text-white': theme,
							'text-black': !theme,
							'text-center': isMob
						}"
					>
						LilBig <span class="text-success">Services</span>
					</p>
					<p
						class="lead pb-0 "
						:class="{
							'text-white': theme,
							'text-black': !theme,
							'text-center': isMob
						}"
						style="font-size: 14px;"
					>
						Fueled by our vices, a statistically irrational mix of uppers and
						downers result in the collaborative execution it takes to achieve
						your businesses goals.
					</p>
					<div class="row ">
						<div class="col-12" style="display: flex;">
							<button
								class="btn btn-success"
								style="border-radius: 8px; width: 100%; margin: auto;"
								@click="hot()"
							>
								Get Your Project Roadmap Today
							</button>
						</div>
					</div>
				</div>
				<div
					class="col-lg-6 col-12"
					style="opacity: 1;background-image: url('https://s3.amazonaws.com/appforest_uf/f1618802115700x202128881818051100/isographic%20brain%20chip.svg'); background-size: contain; background-repeat: no-repeat; background-position: center;"
				>
					<div style="height: 100px;"></div>
					<div style="height: 100px;"></div>
					<div style="height: 100px;"></div>
					<div style="height: 100px;"></div>

					<div class="row row-input"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		components: {},
		data() {
			return {
				primary: this.$store.state.lilbig.nightMode,
				title: null,
				windowWidth: window.innerWidth
			};
		},
		computed: {
			theme() {
				return this.$store.state.lilbig.nightMode;
			},
			isMob() {
				return this.windowWidth < 500;
			},
			lbd() {
				return this.$store.state.lilbig.lbd;
			}
		},
		methods: {
			playSound(url) {
				var audio = new Audio(url);
				audio.play();
			},
			hot() {
				this.$store.commit("deez/coldHeader");
				this.$router.push({ path: "/" });
			}
		},
		mounted() {
			window.onresize = () => {
				this.windowWidth = window.innerWidth;
			};
		}
	};
</script>
<style>
	.test {
		text-transform: capitalize;
	}
	.bb {
		border-bottom: 1px solid #cedcea;
	}
</style>
