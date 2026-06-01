<script lang="ts">
	import { onMount } from 'svelte';

	interface TechIcon {
		name: string;
		class: string;
		colored?: boolean;
	}

	const icons: TechIcon[] = [
		{ name: 'Python', class: 'devicon-python-plain', colored: true },
		{ name: 'Rust', class: 'devicon-rust-original' },
		{ name: 'Java', class: 'devicon-java-plain', colored: true },
		{ name: 'Svelte', class: 'devicon-svelte-plain', colored: true },
		{ name: 'TypeScript', class: 'devicon-typescript-plain', colored: true },
		{ name: 'PostgreSQL', class: 'devicon-postgresql-plain', colored: true },
		{ name: 'Supabase', class: 'devicon-supabase-plain', colored: true },
		{ name: 'JavaScript', class: 'devicon-javascript-plain', colored: true },
		{ name: 'C', class: 'devicon-c-plain', colored: true },
		{ name: 'HTML', class: 'devicon-html5-plain', colored: true },
		{ name: 'CSS', class: 'devicon-css3-plain', colored: true },
		{ name: 'SQL', class: 'devicon-azuresqldatabase-plain' },
		{ name: 'FastAPI', class: 'devicon-fastapi-plain', colored: true },
		{ name: 'Flask', class: 'devicon-flask-original' },
		{ name: 'Express', class: 'devicon-express-original' },
		{ name: 'React', class: 'devicon-react-original', colored: true },
		{ name: 'Next.js', class: 'devicon-nextjs-plain' },
		{ name: 'Django', class: 'devicon-django-plain' },
		{ name: 'MySQL', class: 'devicon-mysql-plain', colored: true },
		{ name: 'MongoDB', class: 'devicon-mongodb-plain', colored: true },
		{ name: 'Redis', class: 'devicon-redis-plain', colored: true },
		{ name: 'Git', class: 'devicon-git-plain', colored: true },
		{ name: 'GitHub', class: 'devicon-github-original' },
		{ name: 'VSCode', class: 'devicon-vscode-plain', colored: true },
		{ name: 'Neovim', class: 'devicon-neovim-plain', colored: true },
		{ name: 'Bash', class: 'devicon-bash-plain' },
		{ name: 'Vercel', class: 'devicon-vercel-plain' },
		{ name: 'NumPy', class: 'devicon-numpy-plain', colored: true },
		{ name: 'TensorFlow', class: 'devicon-tensorflow-original', colored: true },
		{ name: 'Keras', class: 'devicon-keras-plain', colored: true },
		{ name: 'pandas', class: 'devicon-pandas-plain' }
	];

	const PAGE_SIZE = 7;
	const totalPages = Math.ceil(icons.length / PAGE_SIZE);

	const padded: TechIcon[] = [...icons, ...icons.slice(0, totalPages * PAGE_SIZE - icons.length)];

	function getPage(i: number): TechIcon[] {
		const start = ((i % totalPages) + totalPages) % totalPages;
		return padded.slice(start * PAGE_SIZE, start * PAGE_SIZE + PAGE_SIZE);
	}

	let pageIndex: number = $state(0);
	let animating: boolean = $state(false);

	let phase: 'idle' | 'exit' | 'enter' = $state('idle');
	let displayPage: TechIcon[] = $state(getPage(0));

	function changePage(next: number): void {
		if (animating || next === pageIndex) return;
		animating = true;

		phase = 'exit';

		setTimeout(
			() => {
				displayPage = getPage(next);
				pageIndex = next;
				phase = 'enter';

				setTimeout(
					() => {
						phase = 'idle';
						animating = false;
					},
					400 + PAGE_SIZE * 40
				);
			},
			300 + PAGE_SIZE * 35
		);
	}

	function slide(dir: 'left' | 'right'): void {
		const next =
			dir === 'left' ? (pageIndex + 1) % totalPages : (pageIndex - 1 + totalPages) % totalPages;
		changePage(next);
	}

	let timer: ReturnType<typeof setInterval>;

	onMount(() => {
		timer = setInterval(() => slide('left'), 3200);
		return () => clearInterval(timer);
	});

	function restartTimer(): void {
		clearInterval(timer);
		timer = setInterval(() => slide('left'), 3200);
	}

	function iconStyle(i: number): string {
		const delay = i * 35;
		const base = `transition: opacity 280ms ease ${delay}ms, transform 280ms cubic-bezier(0.34,1.56,0.64,1) ${delay}ms;`;
		if (phase === 'exit') {
			return base + 'opacity: 0; transform: translateY(8px) scale(0.85);';
		}
		if (phase === 'enter') {
			return base + 'opacity: 1; transform: translateY(0) scale(1);';
		}
		return 'opacity: 1; transform: translateY(0) scale(1); transition: none;';
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/devicon@2.16.0/devicon.min.css" />
</svelte:head>

<div class="relative w-full select-none" aria-label="Technology stack">
	<div class="grid w-full grid-cols-7 gap-3 py-2">
		{#each displayPage as tech, i (tech.name)}
			<div class="relative aspect-square w-full overflow-hidden rounded-xl" style={iconStyle(i)}>
				<div class="absolute inset-0 bg-black/50 saturate-180 backdrop-blur-xl"></div>
				<div
					class="absolute inset-0 bg-linear-to-br from-[#c8a96e]/6 via-white/1.5 to-black/10"
				></div>
				<div
					class="absolute inset-0 rounded-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
				></div>
				<div
					class="absolute top-0 right-[10%] left-[10%] h-px rounded-full bg-linear-to-r from-transparent via-white/20 to-transparent"
				></div>
				<div class="relative z-10 flex h-full w-full items-center justify-center">
					<i
						class="{tech.class} {tech.colored ? 'colored' : ''} text-[1.75rem]"
						style={!tech.colored ? 'color: rgba(255,255,255,0.5)' : ''}
						title={tech.name}
						aria-label={tech.name}
					></i>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-3 flex gap-1.5">
		{#each Array(totalPages) as _, i}
			<button
				class="h-px cursor-pointer rounded-full border-0 p-0 transition-all duration-300
               {i === pageIndex ? 'w-6 bg-[#c8a96e]' : 'w-3 bg-white/20 hover:bg-white/35'}"
				onclick={() => {
					changePage(i);
					restartTimer();
				}}
				aria-label="Page {i + 1}"
			></button>
		{/each}
	</div>
</div>
