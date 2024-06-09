<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>WordSight - Privacy</title>
</svelte:head>
<div class="flex bg-[#000000]  place-content-center">
	<div class="grid h-screen">
		<div class="grid bg-[#000000] p-5 place-content-center text-white">
			<div class="grid place-items-center">
				<a href="{base}/"><img class="scale-50" src="./favicon.png" alt="" /></a>
			</div>
			<h1 id="tracking-widest privacy-policy" class="font-bold text-center pt-4 text-lg">Privacy Policy</h1>
			<p>
				The WordSight application as an Ad Supported application. This service is provided at no
				cost and is intended for use as is.
			</p>
			<h2 id="information-collection-and-use" class="font-bold pt-4">
				Information Collection and Use
			</h2>
			<p>WordSight does not collect or store personal data.</p>
			<p>
				The application is available on Google Play Store and Google Play Store may collect some
				personal data. Please see the privacy policy for Google Play Services here: <a
					href="https://policies.google.com/privacy">https://policies.google.com/privacy</a
				>
			</p>
			<p>
				The application is also available on Apple App Store and AppStore may collect some personal
				data. Please see the privacy policy for AppStore here: <a
					href="https://www.apple.com/legal/privacy">https://www.apple.com/legal/privacy</a
				>
			</p>
			<h2 id="permissions-requested-by-the-application" class="font-bold pt-4">
				Permissions Requested by the Application
			</h2>
			<p>The following permissions are requested by the WordsSight application:</p>
			<table rules="groups">
				<thead>
					<tr>
						<th style="text-align: left">Permission</th>
						<th style="text-align: center">Requirement</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style="text-align: left">INTERNET</td>
						<td style="text-align: center">To fetch the definitions for words</td>
					</tr>
					<tr>
						<td style="text-align: left">CAMERA</td>
						<td style="text-align: center">To detect words</td>
					</tr>
					<tr>
						<td style="text-align: left">STORAGE</td>
						<td style="text-align: center"
							>To backup and restore the database (used to store details of words learnt everyday).
							<p>Note: Does not store the definitions of the words</p></td
						>
					</tr>
				</tbody>
			</table>

			<h2 id="changes-to-this-privacy-policy" class="font-bold pt-4">
				Changes to This Privacy Policy
			</h2>
			<p>
				This Privacy Policy may be updated from time to time. Thus, you are advised to review this
				page periodically for any changes.
			</p>
			<p>This policy is effective as of 2022-11-01.</p>
			<h2 id="support" class="font-bold pt-4">Support</h2>
			<p>Please reach out to us at thewordsight@gmail.com for any support/queries.</p>
		</div>
	</div>
</div>
