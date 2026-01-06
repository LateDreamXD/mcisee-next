<script setup lang="ts"></script>

<template>
	<main class="settings-custom-home">
		<h2>Custom Home Page</h2>
		<p>Customize your home page with your own content by using xml.</p>
		<div class="preview-panel"></div>
		<!-- todo: monaco editor -->
	</main>
</template>

<style scoped lang="scss">
.settings-custom-home {
	padding: 1rem;
}
.preview-panel {
	width: 100%;
	height: 80vh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
}
</style>
