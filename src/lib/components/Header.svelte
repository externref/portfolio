<script lang="ts">
	let { path = "", visible = false } = $props<{ path?: string; visible?: boolean }>();
</script>

<div class={`hero-logo ${visible ? 'hero-logo--in' : ''}`} aria-hidden="true">/home/externref{path}</div>
