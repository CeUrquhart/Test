<template>
	<div :class="{ 'bg-primary': theme, 'bg-white': !theme }">
		<Confetti></Confetti>
		<header class="">
			<base-nav
				class="navbar-main bb "
				expand
				:class="{ 'bg-primary': theme, 'bg-white': !theme }"
			>
				<div
					class="col-2"
					:class="{ 'text-white': theme, 'text-primary': !theme }"
				>
					<router-link slot="brand" class="navbar-brand " to="/">
						<a
							class="navbar-brand"
							@click="phoneHome"
							:class="{ 'text-white': theme, 'text-primary': !theme }"
							style="font-size: 18px; font-family: Poppins; font-weight: 300;"
						>
							<img
								src="https://s3.amazonaws.com/appforest_uf/f1611624355837x720010338274139000/nicenice.png"
								width="35%"
								class="pb-0"
								v-if="theme"
							/>
							<img
								src="https://s3.amazonaws.com/appforest_uf/f1611627597940x381168473410042000/brain.png"
								width="35%"
								class="pb-0"
								v-else
							/>
							<span style="text-transform: lowercase; font-weight: bold;"
								>| lil</span
							><span style="text-transform: capitalize; font-weight: bold;"
								>Big</span
							>(<span style="text-transform: capitalize; color: #5CC5C5;"
								>Data</span
							>)</a
						>
					</router-link>
				</div>
				<div class="col-8 pl-5">
					<div class="row container">
						<div class="col" v-for="(i, index) in links" :key="index">
							<span class="text-white text-center" @click="goTo(i)">
								{{ i.title }}
							</span>
						</div>
					</div>
				</div>
				<div class="col-2 text-left pr-3">
					<base-switch v-model="primary" type="default"></base-switch>
				</div>
				<div class="col-1">
					<i
						class="ni ni-align-center text-right"
						:class="{ 'text-white': theme, 'text-black': !theme }"
						@click="toggleNav"
					>
					</i>
				</div>

				<div class="row" slot="content-header">
					<div class="col collapse-close">
						<close-button @click="toggleNav"> </close-button>
					</div>
				</div>
			</base-nav>
		</header>
		<PopNav />
	</div>
</template>
<script>
	import BaseNav from "@/components/BaseNav";
	import BaseSwitch from "@/components/BaseSwitch";
	import CloseButton from "@/components/CloseButton";
	import Confetti from "@/views/components/Confetti";
	import PopNav from "@/components/PopNav";
	export default {
		components: {
			BaseNav,
			CloseButton,
			BaseSwitch,
			Confetti,
			PopNav
		},
		data() {
			return {
				primary: this.$store.state.lilbig.nightMode,
				windowWidth: window.innerWidth,
				links: [
					{
						id: 0,
						title: "Services",
						path: "/services"
					},
					{
						id: 1,
						title: "Resource",
						path: "/resources"
					},
					{
						id: 2,
						title: "Team",
						path: "/team"
					},
					{
						id: 3,
						title: "Contact",
						path: "/"
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
			phoneHome() {
				this.$store.commit("deez/warmHeader");
				this.$router.push({ path: "/" });
			},
			navContact() {
				this.$store.commit("deez/coldHeader");
				this.$router.push({ path: "/" });
			},
			playSound(url) {
				var audio = new Audio(url);
				audio.play();
			},
			toggleNav() {
				this.$store.dispatch("lilbig/togglePopNav");
			},
			toggleTheme() {
				this.$store.dispatch("lilbig/toggleNightMode");
			},
			togDeez() {
				this.$store.dispatch("deez/toggleDaHeat");
			},
			goTo(i) {
				i.id == 3 ? this.navContact() : this.$router.push({ path: i.path });
			}
		},
		watch: {
			primary: function(vnew) {
				this.toggleTheme();
				if (vnew) {
					this.playSound(
						"https://soundbible.com/mp3/Air%20Plane%20Ding-SoundBible.com-496729130.mp3"
					);
				} else {
					this.playSound(
						"https://s3.amazonaws.com/appforest_uf/f1611714023491x157500777026451380/Electronic_Chime-KevanGC-495939803.mp3"
					);
				}
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
