<script lang="ts">
	let { visible = false } = $props<{ visible?: boolean }>();
</script>

<div class={`hero-logo ${visible ? 'hero-logo--in' : ''}`} aria-hidden="true">/home/externref</div>
