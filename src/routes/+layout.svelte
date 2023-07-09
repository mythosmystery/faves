<script>
	import '../app.css'
	import Icon from '@iconify/svelte'
</script>

<svelte:head>
	<title>Faves!!</title>
</svelte:head>

<div class="flex justify-center p-12 bg-slate-900 min-h-screen">
	<a class="fixed top-0 left-0 m-2 p-4 text-white" href="/">
		<Icon icon="octicon:home-fill-24" height="40" width="40" />
	</a>
	<slot />
</div>
