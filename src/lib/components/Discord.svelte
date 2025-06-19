<script lang="ts">
	import type { ActivityData } from '$lib/$types';

	export let data: ActivityData;
</script>

<section class="mx-auto my-8 w-full max-w-full px-2 md:w-[40vw] md:max-w-2xl">
	<h2 class="text-primary mb-2 text-center text-lg font-bold sm:text-xl">Live Activity</h2>
	<div class="bg-base-100 dark:bg-base-200 flex flex-col items-center rounded-lg p-4 shadow">
		<div class="mb-2 flex w-full items-center gap-3">
			<img
				src={data.avatar_url}
				alt={data.username}
				class="h-8 w-8 rounded-full border-2 transition-colors duration-300 {data.activity
					.listening ||
				data.activity.playing ||
				data.activity.custom
					? 'border-green-500'
					: 'border-gray-400'}"
			/>
			<div class="flex-1 text-left">
				<div class="text-primary text-sm leading-tight font-bold">
					&nbsp;&nbsp;{data.username}
				</div>
				{#if data.activity.custom}
					<div class="text-base-content/80 flex items-center gap-1 text-xs">
						{#if data.activity.custom.emoji}
							<span>&nbsp;&nbsp;{data.activity.custom.emoji}</span>
						{/if}
						<span>{data.activity.custom.value}</span>
					</div>
				{/if}
			</div>
		</div>
		<hr class="border-base-200 my-2 w-full" />
		{#if data.activity.listening}
			<div class="mb-1 flex w-full flex-row items-center gap-3">
				<img
					src={data.activity.listening.album_cover_url}
					alt={data.activity.listening.album}
					class="mr-2 h-8 w-8 shrink-0 rounded shadow"
				/>
				<div class="min-w-0 flex-1 text-left">
					<a
						href={data.activity.listening.track_url}
						target="_blank"
						rel="noopener"
						class="text-primary block max-w-full truncate text-xs font-semibold hover:underline"
					>
						{data.activity.listening.title}
					</a>
					<div class="text-base-content/70 max-w-full truncate text-[10px]">
						{data.activity.listening.artist}
					</div>
				</div>
			</div>
			{#if data.activity.playing}
				<hr class="border-base-200 my-2 w-full" />
			{/if}
		{/if}

		{#if data.activity.playing}
			<div class="mb-1 flex w-full flex-row items-center gap-3">
				{#if data.activity.playing.large_image_url}
					<img
						src={data.activity.playing.large_image_url}
						alt={data.activity.playing.name}
						class="mr-2 h-8 w-8 shrink-0 rounded shadow"
					/>
				{/if}
				<div class="min-w-0 flex-1 text-left">
					<div class="text-primary max-w-full truncate text-xs font-semibold">
						{data.activity.playing.name}
					</div>
					{#if data.activity.playing.details}
						<div class="text-base-content/70 max-w-full truncate text-[10px]">
							{data.activity.playing.details}
						</div>
					{/if}
					{#if data.activity.playing.url}
						<a
							href={data.activity.playing.url}
							target="_blank"
							rel="noopener"
							class="text-[10px] text-blue-500 hover:underline">More Info</a
						>
					{/if}
				</div>
			</div>
		{/if}

		{#if !data.activity.listening && !data.activity.playing && !data.activity.custom}
			<div class="text-base-content/60 text-center text-[10px]">No current activity</div>
		{/if}
	</div>
</section>
