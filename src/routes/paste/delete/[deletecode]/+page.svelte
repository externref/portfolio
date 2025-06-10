<script lang="ts">
	import { goto } from '$app/navigation';
	let deleteCode = '';
	let error: string | null = null;
	let success: boolean = false;

	async function handleDelete(e: Event) {
		e.preventDefault();
		error = null;
		success = false;
		const res = await fetch('/paste/delete/' + deleteCode, { method: 'POST' });
		const data = await res.json();
		if (data.success) {
			success = true;
			setTimeout(() => goto('/paste'), 1200);
		} else {
			error = data.error;
		}
	}
</script>

<div class="mx-auto max-w-md p-4">
	<h1 class="text-error mb-4 text-2xl font-bold">Delete Paste</h1>
	<form
		on:submit|preventDefault={handleDelete}
		class="bg-base-100 dark:bg-base-200 space-y-4 rounded-xl p-4 shadow"
	>
		<label class="mb-1 block font-semibold" for="deleteCode">Delete Code</label>
		<input
			id="deleteCode"
			bind:value={deleteCode}
			class="input input-bordered w-full"
			placeholder="Enter delete code"
		/>
		<button type="submit" class="btn btn-error w-full">Delete</button>
	</form>
	{#if success}
		<div class="alert alert-success mt-4">Paste deleted! Redirecting...</div>
	{/if}
	{#if error}
		<div class="alert alert-error mt-4">{error}</div>
	{/if}
</div>
