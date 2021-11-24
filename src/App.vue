<template>
	<div id='app'>
		<navigation/>
		<main-section/>
		<footer-nav/>
	</div>
</template>

<script>
import Navigation from './Partials/Navigation.vue'
import MainSection from './Partials/Main.vue'
import FooterNav from './Partials/Footer.vue'

export default {
    name: 'App',
    components: {
        Navigation,
        MainSection,
        FooterNav
    }
}
</script>
