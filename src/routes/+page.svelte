<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>WordSight</title>
</svelte:head>
<div class="bg-[#000000] grid place-items-center h-full w-full">
	<div class="">
		<div class="flex-col p-10 grid place-items-center h-screen w-screen">
			<div class="grid place-items-center">
				<img class="scale-50" src="./favicon.png" alt="" />
			</div>
			<div>
				<div class="self-center font-mono text-4xl font-bold text-white">DEFINITIONS</div>
				<div class="self-center font-mono text-4xl font-bold text-[#83fe78]">IN ONE CLICK.</div>
			</div>
			<div class="grid place-items-center p-5">
				<div class="sm:flex md:flex-row lg:flex-row">
					<a
						href="https://play.google.com/store/apps/details?id=com.kappasquare.wordsight&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
						><img class="w-60 sm:pt-10 md:pt-20 lg:pt-20" alt="Get it on Google Play" src="./google-badge.png" /></a
					>
					<a
						href="https://apps.apple.com/app/wordsight/id6444799091"
						><img class="w-60 sm:pt-10 md:pt-20 lg:pt-20" alt="Get it on AppStore" src="./apple-badge.png" /></a
					>
				</div>
			</div>
			<p class="absolute mt-4 text-center text-sm text-gray-700 lg:mt-0 lg:text-right z-10 top-5">
				<a href="{base}/privacy">View Privacy Policy</a>
			</p>
		</div>
	</div>
	<!-- <div class="bg-[#040303] hidden lg:grid w-screen">
		<div class="grid text-white font-mono p-8 overflow-clip">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu purus posuere, consectetur
			elit quis, maximus quam. Aenean turpis libero, fringilla in venenatis ut, condimentum sed
			risus. Vivamus massa neque, consectetur vitae dictum ac, feugiat eu sem. Pellentesque eget dui
			vulputate, vulputate lectus eget, hendrerit dolor. Donec congue dui non sapien dictum, ac
			condimentum turpis rutrum. Donec maximus aliquam pretium. In scelerisque metus eget imperdiet
			molestie. Ut eget magna viverra, eleifend est ac, finibus sapien. Cras metus lectus, varius in
			euismod non, bibendum non lacus. Proin viverra ipsum eu lorem commodo, quis ullamcorper justo
			vulputate. Phasellus dictum pretium nisi, a ornare tortor convallis sed. Donec a sollicitudin
			risus. Curabitur consequat augue vel massa tristique, in molestie lacus tincidunt. Vestibulum
			ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean eu laoreet
			est, interdum cursus augue. Morbi neque urna, faucibus vel pellentesque vel, porttitor at ex.
			Curabitur tincidunt sapien accumsan viverra semper. Duis vulputate dignissim massa id
			tincidunt. Mauris nisl ante, convallis vitae aliquet vitae, dictum id augue. Curabitur ac
			tellus ac massa hendrerit consequat. Nunc volutpat erat et cursus egestas. Fusce sodales
			tortor nec diam rutrum, eget tempor orci gravida. Praesent mi arcu, dignissim id sapien et,
			tristique aliquam nunc. Nunc hendrerit ornare ultrices. Quisque in libero enim. In pretium non
			purus sit amet fermentum. Donec viverra lectus vel odio cursus ultrices. Nam viverra tempor
			diam eu sagittis. Quisque luctus dolor at nisi consectetur, at hendrerit lectus feugiat.
			Curabitur dictum metus eu lacus elementum, at iaculis massa vestibulum. Pellentesque porttitor
			semper sem, vel pellentesque nisl. Proin molestie aliquet ligula quis pulvinar. Cras ac nulla
			finibus dolor hendrerit tempus in id nibh. Curabitur ut dignissim lorem, non cursus ipsum.
			Praesent dignissim mattis tortor, at venenatis mauris. Fusce non nunc felis. Fusce sodales
			tortor nec diam rutrum, eget tempor orci gravida. Praesent mi arcu, dignissim id sapien et,
			tristique aliquam nunc. Nunc hendrerit ornare ultrices. Quisque in libero enim. In pretium non
			purus sit amet fermentum. Donec viverra lectus vel odio cursus ultrices. Nam viverra tempor
			diam eu sagittis. Quisque luctus dolor at nisi consectetur, at hendrerit lectus feugiat.
			Curabitur dictum metus eu lacus elementum, at iaculis massa vestibulum. Pellentesque porttitor
			semper sem, vel pellentesque nisl. Proin molestie aliquet ligula quis pulvinar. Cras ac nulla
			finibus dolor hendrerit tempus in id nibh. Curabitur ut dignissim lorem, non cursus ipsum.
			Praesent dignissim mattis tortor, at venenatis mauris. Fusce non nunc felis. Fusce sodales
			tortor nec diam rutrum, eget tempor orci gravida. Praesent mi arcu, dignissim id sapien et,
			tristique aliquam nunc. Nunc hendrerit ornare ultrices. Quisque in libero enim. In pretium non
			purus sit amet fermentum. Donec viverra lectus vel odio cursus ultrices. Nam viverra tempor
			diam eu sagittis. Quisque luctus dolor at nisi consectetur, at hendrerit lectus feugiat.
			Curabitur dictum metus eu lacus elementum, at iaculis massa vestibulum. Pellentesque porttitor
			semper sem, vel pellentesque nisl. Proin molestie aliquet ligula quis pulvinar. Cras ac nulla
			finibus dolor hendrerit tempus in id nibh. Curabitur ut dignissim lorem, non cursus ipsum.
			Praesent dignissim mattis tortor, at venenatis mauris. Fusce non nunc felis.
		</div>
	</div> -->
</div>
