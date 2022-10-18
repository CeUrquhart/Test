<template>
	<div class="">
		<modal :show.sync="coming">
			<p class="text-success text-center h4">Coming Soon!</p>
		</modal>
		<modal :show.sync="modal">
			<div>
				<div class="row">
					<div class="col">
						<div
							class="inspo"
							:style="{ backgroundImage: 'url(' + inspire + ')' }"
						></div>
					</div>
				</div>
				<div style="height: 25px;"></div>
				<div class="row">
					<div
						class="col-1 ml-2 mr-2 mt-2"
						v-for="(i, index) in items"
						:key="index"
					>
						<img :src="i" class="" height="50" width="50" @click="setImg(i)" />
					</div>
				</div>
				<div class="row">
					<div class="col pt-3" style="display: flex;">
						<button
							class="btn btn-secondary"
							@click="newSpire"
							style="margin: auto; width: 100%;"
						>
							Another!!
						</button>
						<button
							disabled
							class=" btn-transparent"
							style="border-color: transparent"
						></button>
						<button
							class="btn btn-secondary"
							@click="modal = false"
							style="margin: auto; width: 100%;"
						>
							Close
						</button>
					</div>
				</div>
				<div class="row pt-2">
					<div class="col">
						<p style="font-size: 10px; color: gray;">
							The inspiration provided is brought to you by Inspirobot, they do
							not reflect the view or stance of LilBigData.
						</p>
					</div>
				</div>
			</div>
		</modal>
		<transition name="slide-fade">
			<div
				class="container "
				:class="{
					'bg-primary': theme,
					'bg-dope': !theme,
					'menu-dark': !isMob,
					'menu-mob': isMob
				}"
				v-if="nav"
			>
				<div class="row p-2">
					<div
						class="container bg-info"
						style="border-radius: 15px;"
						@click="navHome"
					>
						<div class="col-12 text-center text-primary p-3">
							<i class="ni ni-shop"></i>
							<p>Home</p>
						</div>
					</div>
				</div>

				<div class="row p-2">
					<div
						@click="navigate('services')"
						class="col bg-green container text-center text-primary p-3"
						style="border-radius: 15px;"
					>
						<i class="ni ni-app"></i>
						<p>Services</p>
					</div>
					<div style="width: 10px;"></div>
					<div
						@click="navigate('resources')"
						class="col text-center container bg-warning text-primary p-3"
						style="border-radius: 15px;"
					>
						<i class="ni ni-books"></i>
						<p>Resources</p>
					</div>
				</div>
				<div class="row p-2">
					<div
						@click="navigate('team')"
						class="col text-center container bg-default text-primary p-3"
						style="border-radius: 15px;"
					>
						<i class="ni ni-circle-08"></i>
						<p>Team</p>
					</div>
					<div style="width: 10px;"></div>
					<div
						@click="navContact"
						class="col text-center container bg-gray text-primary p-3"
						style="border-radius: 15px;"
					>
						<i class="ni ni-bell-55"></i>
						<p>Contact</p>
					</div>
				</div>
				<div class="row p-2">
					<div class="container bg-success" style="border-radius: 15px;">
						<div
							class="col-12 text-center text-primary p-3"
							@click="
								modal = true;
								spire();
							"
						>
							<i class="ni ni-atom"></i>
							<p>Inspire Me</p>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import axios from "axios";
	import Modal from "@/components/Modal";
	export default {
		components: { Modal },
		data() {
			return {
				primary: this.$store.state.lilbig.nightMode,
				conf: false,
				inspire: null,
				modal: false,
				coming: false,
				windowWidth: window.innerWidth,
				items: []
			};
		},
		computed: {
			nav() {
				return this.$store.state.lilbig.popNav;
			},
			theme() {
				return this.$store.state.lilbig.nightMode;
			},
			isMob() {
				return this.windowWidth < 500;
			}
		},
		methods: {
			start() {
				this.conf = true;
				this.$confetti.start({
					canvasId: "custom-canvas",
					particles: [
						{
							type: "image",
							size: 10,
							url:
								"https://s3.amazonaws.com/appforest_uf/f1611637190131x354214050123184500/lilbrain50p.png"
						},
						{
							type: "image",
							size: 15,
							url:
								"https://s3.amazonaws.com/appforest_uf/f1611637190131x354214050123184500/lilbrain50p.png"
						}
					],
					defaultColors: ["white", "gray", "#fff"],
					defaultDropRate: 5,
					particlesPerFrame: 0.2,
					windSpeedMax: 0.1
				});
			},
			setImg(i) {
				this.inspire = i;
			},
			stop() {
				this.conf = false;
				this.$confetti.stop();
			},
			navHome() {
				this.$store.commit("deez/warmHeader");
				this.$router.push({ path: "/" });
				this.$store.dispatch("lilbig/togglePopNav");
			},
			navContact() {
				this.$store.commit("deez/coldHeader");
				this.$router.push({ path: "/" });
				this.$store.dispatch("lilbig/togglePopNav");
			},
			navigate(value) {
				const route = "/" + value;
				this.$router.push({ path: route });
				this.$store.dispatch("lilbig/togglePopNav");
			},
			newSpire() {
				this.items.includes(this.inspire)
					? console.log("nah")
					: this.items.push(this.inspire);
				this.spire();
			},
			spire() {
				axios
					.get("https://inspirobot.me/api?generate=true&oy=vey")
					.then((res) => {
						const data = res.data;
						this.inspire = data;
					});
			}
		},
		created() {
			this.spire();
		},
		mounted() {
			window.onresize = () => {
				this.windowWidth = window.innerWidth;
			};
		}
	};
</script>

<style scoped>
	p,
	i {
		font-weight: bold;
		font-size: 18px;
		color: white;
	}
	.bg-dark {
		border-color: #5c738a;
		background-color: #102a43;
		color: #fff;
	}
	.bg-dope {
		border-color: #dedede;
		background-color: #f8f8f8;
	}
	.menu-dark {
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
			rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
		transform-style: preserve-3d;
		opacity: 1;
		display: block;
		font-family: "Cerebri Sans", sans-serif;
		font-size: 14px;
		line-height: 20px;
		-webkit-box-direction: normal;
		box-sizing: border-box;
		position: fixed;
		left: auto;
		top: auto;
		right: 2%;
		bottom: 2%;
		z-index: 25;
		width: 357px;
		height: auto;
		padding: 30px;
		border-style: solid;
		border-width: 1px;
		border-radius: 20px;
		background-attachment: scroll !important;
		box-shadow: none;
	}
	.menu-mob {
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
			rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
		transform-style: preserve-3d;
		opacity: 1;
		display: block;
		font-family: "Cerebri Sans", sans-serif;
		font-size: 14px;
		line-height: 20px;
		-webkit-box-direction: normal;
		box-sizing: border-box;
		position: fixed;
		left: auto;
		top: 20%;
		right: auto;
		bottom: 2%;
		z-index: 25;
		width: 330px;
		height: auto;
		padding: 20px;
		border-style: solid;
		border-width: 1px;
		border-radius: 20px;
		background-attachment: scroll !important;
		box-shadow: none;
	}
	.slide-fade-enter-active {
		transition: all 0.3s ease;
	}
	.slide-fade-leave-active {
		transition: all 0.8s ease;
		transform: translateX(10px);
	}
	.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
	.parent {
		display: flex;
	}
	.child {
		margin: auto;
	}
	.inspo {
		height: 450px;
		width: 450px;

		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
