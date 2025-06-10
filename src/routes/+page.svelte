<script lang="ts">
	import { onMount } from 'svelte';
	import { blur, fade } from 'svelte/transition';
	import { fetchGitHubStars } from '../lib/githubStars';

	let transition = false;

	onMount(() => {
		transition = true;
	});

	const projectRepos = [
		'externref/wyvern',
		'externref/aoi',
		'externref/glyph',
		'externref/synap',
		'externref/macro',
		'externref/space',
		'externref/dawn',
		'externref/marvelrivalsapi'
	];

	let stars: Record<string, number> = {};

	onMount(async () => {
		stars = await fetchGitHubStars(projectRepos);
	});
</script>

{#if transition}
	<section
		class="bg-base-100 dark:bg-base-200 flex min-h-[60vh] flex-col items-center justify-center py-12 text-center"
		in:fade={{ duration: 600 }}
		out:fade={{ duration: 400 }}
	>
		<h1
			class="text-primary mb-4 text-3xl font-extrabold transition-all duration-500 hover:scale-105 sm:text-4xl md:text-5xl"
		>
			Hi, I'm <span class="inline-block transition-transform duration-500 hover:scale-110"
				>Sarthak</span
			>
		</h1>
		<p
			class="text-base-content dark:text-base-content/80 mx-auto mb-6 max-w-xl text-base transition-opacity duration-500 hover:opacity-90 sm:text-lg md:text-xl"
		>
			I'm a developer who enjoys building, automating, and scripting with Python, Rust, and web
			technologies. I care about open source and the command line, and I like to keep things
			efficient—but when the work is done, you'll probably catch me gaming.
		</p>
		<div class="mb-2 flex flex-wrap justify-center gap-4">
			<a
				href="https://github.com/externref"
				target="_blank"
				rel="noopener"
				class="btn btn-ghost flex items-center gap-2 px-3 py-1 text-xs transition-transform duration-300 hover:scale-110 sm:px-4 sm:py-2 sm:text-sm md:text-base"
				><i class="bi bi-github"></i>GitHub</a
			>
			<a
				href="https://steamcommunity.com/id/externref"
				target="_blank"
				rel="noopener"
				class="btn btn-ghost flex items-center gap-2 px-3 py-1 text-xs transition-transform duration-300 hover:scale-110 sm:px-4 sm:py-2 sm:text-sm md:text-base"
				><i class="bi bi-steam"></i>Steam</a
			>
			<a
				href="/resume.pdf"
				target="_blank"
				rel="noopener"
				class="btn btn-primary flex items-center gap-2 px-3 py-1 text-xs transition-transform duration-300 hover:scale-110 sm:px-4 sm:py-2 sm:text-sm md:text-base"
			>
				<i class="bi bi-file-earmark-person"></i>
				Resume
			</a>
		</div>
	</section>

	<section class="mx-auto my-12 max-w-7xl px-4">
		<h2 class="text-primary mb-4 text-center text-2xl font-bold sm:text-3xl">Tech Stack & Tools</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-4">
			<!-- Languages -->
			<div
				transition:blur={{ duration: 1000 }}
				class="bg-base-100 dark:bg-base-200 flex flex-col items-center rounded-xl p-6 shadow"
			>
				<h3 class="text-primary mb-4 text-center text-lg font-semibold">Languages</h3>
				<div class="grid grid-cols-3 gap-4">
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
							alt="Python"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Python</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/rust.svg"
							alt="Rust"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Rust</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
							alt="TypeScript"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">TypeScript</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
							alt="JavaScript"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">JavaScript</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
							alt="C"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">C</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
							alt="C++"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">C++</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
							alt="Java"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Java</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg"
							alt="Julia"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Julia</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg"
							alt="Scala"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Scala</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
							alt="HTML"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">HTML</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
							alt="CSS"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">CSS</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
							alt="SCSS"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">SCSS</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg"
							alt="Lua"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Lua</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/gleam.svg"
							alt="Gleam"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Gleam</span>
					</div>
				</div>
			</div>
			<!-- Frameworks -->
			<div
				transition:blur={{ duration: 1000 }}
				class="bg-base-100 dark:bg-base-200 flex flex-col items-center rounded-xl p-6 shadow"
			>
				<h3 class="text-primary mb-4 text-center text-lg font-semibold">Frameworks</h3>
				<div class="grid grid-cols-3 gap-4">
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
							alt="Svelte"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Svelte</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
							alt="Angular"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Angular</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
							alt="FastAPI"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">FastAPI</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://rocket.rs/images/logo-boxed.png"
							alt="Rocket.rs"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Rocket.rs</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
							alt="Flask"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Flask</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
							alt="ExpressJS"
							class="mb-1 h-8 w-8 rounded bg-white"
						/>
						<span class="text-xs sm:text-sm">ExpressJS</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg"
							alt="Fastify"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Fastify</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
							alt="Vue.js"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Vue.js</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
							alt="React"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">React</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
							alt="Next.js"
							class="mb-1 h-8 w-8 rounded bg-white"
						/>
						<span class="text-xs sm:text-sm">Next.js</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
							alt="Django"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Django</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
							alt="FastAPI"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">FastAPI</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
							alt="Flask"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Flask</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
							alt="React Native"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">ReactNative</span>
					</div>
				</div>
			</div>
			<!-- Databases -->
			<div
				transition:blur={{ duration: 1000 }}
				class="bg-base-100 dark:bg-base-200 flex flex-col items-center rounded-xl p-6 shadow"
			>
				<h3 class="text-primary mb-4 text-center text-lg font-semibold">Databases</h3>
				<div class="grid grid-cols-2 gap-4">
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
							alt="PostgreSQL"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">PostgreSQL</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
							alt="MySQL"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">MySQL</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
							alt="MongoDB"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">MongoDB</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
							alt="SQLite3"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">SQLite3</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg"
							alt="MariaDB"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">MariaDB</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
							alt="Redis"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Redis</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg"
							alt="Oracle"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Oracle</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
							alt="Firebase"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Firebase</span>
					</div>
				</div>
			</div>
			<!-- Tools -->
			<div
				transition:blur={{ duration: 1000 }}
				class="bg-base-100 dark:bg-base-200 flex flex-col items-center rounded-xl p-6 shadow"
			>
				<h3 class="text-primary mb-4 text-center text-lg font-semibold">Tools</h3>
				<div class="grid grid-cols-3 gap-4">
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
							alt="GitHub"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">GitHub</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
							alt="Git"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Git</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg"
							alt="Neovim"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Neovim</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
							alt="VSCode"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">VSCode</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
							alt="IntelliJ IDEA"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">IntelliJIDEA</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://resources.jetbrains.com/storage/products/company/brand/logos/WebStorm_icon.svg"
							alt="WebStorm"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">WebStorm</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://resources.jetbrains.com/storage/products/company/brand/logos/PyCharm_icon.svg"
							alt="PyCharm"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">PyCharm</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://www.sublimehq.com/images/sublime_text.png"
							alt="Sublime Text"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">SublimeText</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://zed.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_wordmark_white_bigger.2c31c722.png&w=1920&q=100"
							alt="Zed"
							class="mb-1 h-8 w-8 rounded bg-black"
						/>
						<span class="text-xs sm:text-sm">Zed</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fishshell.svg"
							alt="Fish Shell"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Fish Shell</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
							alt="Bash"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Bash</span>
					</div>
					<div class="flex flex-col items-center">
						<img src="https://www.zsh.org/color_vertical_icon.png" alt="Zsh" class="mb-1 h-8 w-8" />
						<span class="text-xs sm:text-sm">Zsh</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vercel.svg"
							alt="Vercel"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Vercel</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg"
							alt="Render"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Render</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
							alt="GitLens"
							class="mb-1 h-8 w-8 opacity-70"
						/>
						<span class="text-xs sm:text-sm">GitLens</span>
					</div>
					<div class="flex flex-col items-center">
						<img
							src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/githubcopilot.svg"
							alt="Copilot"
							class="mb-1 h-8 w-8"
						/>
						<span class="text-xs sm:text-sm">Copilot</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="projects" class="mx-auto my-12 max-w-7xl px-4">
		<h2 class="text-primary mb-4 text-center text-2xl font-bold sm:text-3xl">Projects</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<!-- Wyvern -->
			<a
				href="https://github.com/externref/wyvern"
				target="_blank"
				rel="noopener"
				class="bg-base-100 dark:bg-base-200 flex flex-col rounded-xl p-6 shadow transition-transform hover:scale-[1.03]"
			>
				<div class="mb-2 flex items-center gap-2">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
						alt="Python"
						class="h-6 w-6"
					/>
					<h3 class="text-primary text-lg font-semibold">Wyvern</h3>
				</div>
				<p class="text-base-content/80 mb-2 text-sm">
					A Discord API wrapper written in Python, designed for building bots and automation with
					ease.
				</p>
				<span class="text-base-content/60 text-xs">github.com/externref/wyvern</span>
				<div class="border-base-200 mt-4 flex items-center gap-2 border-t pt-2">
					<img
						src="https://avatars.githubusercontent.com/externref"
						alt="externref avatar"
						class="h-6 w-6 rounded-full"
					/>
					<span class="text-base-content/60 text-xs">author: externref</span>
					<span
						class="ml-auto flex items-center gap-1 text-xs text-yellow-500"
						title="GitHub Stars"
					>
						<i class="bi bi-star-fill"></i>
						{stars['externref/wyvern'] ?? '—'}
					</span>
				</div>
			</a>
			<!-- AOI -->
			<a
				href="https://github.com/externref/aoi"
				target="_blank"
				rel="noopener"
				class="bg-base-100 dark:bg-base-200 flex flex-col rounded-xl p-6 shadow transition-transform hover:scale-[1.03]"
			>
				<div class="mb-2 flex items-center gap-2">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
						alt="Python"
						class="h-6 w-6"
					/>
					<h3 class="text-primary text-lg font-semibold">Aoi</h3>
				</div>
				<p class="text-base-content/80 mb-2 text-sm">
					A simple SQLite wrapper for the terminal, making database management and queries easy from
					the command line.
				</p>
				<span class="text-base-content/60 text-xs">github.com/externref/aoi</span>
				<div class="border-base-200 mt-4 flex items-center gap-2 border-t pt-2">
					<img
						src="https://avatars.githubusercontent.com/externref"
						alt="externref avatar"
						class="h-6 w-6 rounded-full"
					/>
					<span class="text-base-content/60 text-xs">author: externref</span>
					<span
						class="ml-auto flex items-center gap-1 text-xs text-yellow-500"
						title="GitHub Stars"
					>
						<i class="bi bi-star-fill"></i>
						{stars['externref/aoi'] ?? '—'}
					</span>
				</div>
			</a>
			<!-- Glyph -->
			<a
				href="https://github.com/externref/glyph"
				target="_blank"
				rel="noopener"
				class="bg-base-100 dark:bg-base-200 flex flex-col rounded-xl p-6 shadow transition-transform hover:scale-[1.03]"
			>
				<div class="mb-2 flex items-center gap-2">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
						alt="Svelte"
						class="h-6 w-6"
					/>
					<h3 class="text-primary text-lg font-semibold">Glyph</h3>
				</div>
				<p class="text-base-content/80 mb-2 text-sm">
					A fast, minimal pastebin service for sharing code and text snippets online.
				</p>
				<span class="text-base-content/60 text-xs">github.com/externref/glyph</span>
				<div class="border-base-200 mt-4 flex items-center gap-2 border-t pt-2">
					<img
						src="https://avatars.githubusercontent.com/externref"
						alt="externref avatar"
						class="h-6 w-6 rounded-full"
					/>
					<span class="text-base-content/60 text-xs">author: externref</span>
					<span
						class="ml-auto flex items-center gap-1 text-xs text-yellow-500"
						title="GitHub Stars"
					>
						<i class="bi bi-star-fill"></i>
						{stars['externref/glyph'] ?? '—'}
					</span>
				</div>
			</a>
			<!-- Synap -->
			<a
				href="https://github.com/externref/synap"
				target="_blank"
				rel="noopener"
				class="bg-base-100 dark:bg-base-200 flex flex-col rounded-xl p-6 shadow transition-transform hover:scale-[1.03]"
			>
				<div class="mb-2 flex items-center gap-2">
					<img
						src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/rust.svg"
						alt="Rust"
						class="h-6 w-6"
					/>
					<h3 class="text-primary text-lg font-semibold">Synap</h3>
				</div>
				<p class="text-base-content/80 mb-2 text-sm">
					A Neofetch-like application for fetching and displaying system information in the
					terminal.
				</p>
				<span class="text-base-content/60 text-xs">github.com/externref/synap</span>
				<div class="border-base-200 mt-4 flex items-center gap-2 border-t pt-2">
					<img
						src="https://avatars.githubusercontent.com/externref"
						alt="externref avatar"
						class="h-6 w-6 rounded-full"
					/>
					<span class="text-base-content/60 text-xs">author: externref</span>
					<span
						class="ml-auto flex items-center gap-1 text-xs text-yellow-500"
						title="GitHub Stars"
					>
						<i class="bi bi-star-fill"></i>
						{stars['externref/synap'] ?? '—'}
					</span>
				</div>
			</a>
			<!-- Macro -->
			<a
				href="https://github.com/externref/macro"
				target="_blank"
				rel="noopener"
				class="bg-base-100 dark:bg-base-200 flex flex-col rounded-xl p-6 shadow transition-transform hover:scale-[1.03]"
			>
				<div class="mb-2 flex items-center gap-2">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
						alt="Python"
						class="h-6 w-6"
					/>
					<h3 class="text-primary text-lg font-semibold">Macro</h3>
				</div>
				<p class="text-base-content/80 mb-2 text-sm">
					A lightweight webserver framework for building fast and simple web applications.
				</p>
				<span class="text-base-content/60 text-xs">github.com/externref/macro</span>
				<div class="border-base-200 mt-4 flex items-center gap-2 border-t pt-2">
					<img
						src="https://avatars.githubusercontent.com/externref"
						alt="externref avatar"
						class="h-6 w-6 rounded-full"
					/>
					<span class="text-base-content/60 text-xs">author: externref</span>
					<span
						class="ml-auto flex items-center gap-1 text-xs text-yellow-500"
						title="GitHub Stars"
					>
						<i class="bi bi-star-fill"></i>
						{stars['externref/macro'] ?? '—'}
					</span>
				</div>
			</a>
			<!-- Space -->
			<a
				href="https://github.com/externref/space"
				target="_blank"
				rel="noopener"
				class="bg-base-100 dark:bg-base-200 flex flex-col rounded-xl p-6 shadow transition-transform hover:scale-[1.03]"
			>
				<div class="mb-2 flex items-center gap-2">
					<img
						src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/rust.svg"
						alt="Rust"
						class="h-6 w-6"
					/>
					<h3 class="text-primary text-lg font-semibold">Space</h3>
				</div>
				<p class="text-base-content/80 mb-2 text-sm">
					A JSON-based data storage system for simple and flexible data persistence.
				</p>
				<span class="text-base-content/60 text-xs">github.com/externref/space</span>
				<div class="border-base-200 mt-4 flex items-center gap-2 border-t pt-2">
					<img
						src="https://avatars.githubusercontent.com/externref"
						alt="externref avatar"
						class="h-6 w-6 rounded-full"
					/>
					<span class="text-base-content/60 text-xs">author: externref</span>
					<span
						class="ml-auto flex items-center gap-1 text-xs text-yellow-500"
						title="GitHub Stars"
					>
						<i class="bi bi-star-fill"></i>
						{stars['externref/space'] ?? '—'}
					</span>
				</div>
			</a>
			<!-- Dawn -->
			<a
				href="https://github.com/externref/dawn"
				target="_blank"
				rel="noopener"
				class="bg-base-100 dark:bg-base-200 flex flex-col rounded-xl p-6 shadow transition-transform hover:scale-[1.03]"
			>
				<div class="mb-2 flex items-center gap-2">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
						alt="Python"
						class="h-6 w-6"
					/>
					<h3 class="text-primary text-lg font-semibold">Dawn</h3>
				</div>
				<p class="text-base-content/80 mb-2 text-sm">
					A command handler for the Hikari library, making Discord bot command management easy and
					efficient.
				</p>
				<span class="text-base-content/60 text-xs">github.com/externref/dawn</span>
				<div class="border-base-200 mt-4 flex items-center gap-2 border-t pt-2">
					<img
						src="https://avatars.githubusercontent.com/externref"
						alt="externref avatar"
						class="h-6 w-6 rounded-full"
					/>
					<span class="text-base-content/60 text-xs">author: externref</span>
					<span
						class="ml-auto flex items-center gap-1 text-xs text-yellow-500"
						title="GitHub Stars"
					>
						<i class="bi bi-star-fill"></i>
						{stars['externref/dawn'] ?? '—'}
					</span>
				</div>
			</a>
			<!-- MarvelRivalsAPI -->
			<a
				href="https://github.com/externref/marvelrivalsapi"
				target="_blank"
				rel="noopener"
				class="bg-base-100 dark:bg-base-200 flex flex-col rounded-xl p-6 shadow transition-transform hover:scale-[1.03]"
				in:fade={{ duration: 400 }}
			>
				<div class="mb-2 flex items-center gap-2">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
						alt="Python"
						class="h-6 w-6"
					/>
					<h3 class="text-primary text-lg font-semibold">MarvelRivalsAPI</h3>
				</div>
				<p class="text-base-content/80 mb-2 text-sm">
					A Python API wrapper for Marvel Rivals, providing easy access to game data and stats for
					bots, tools, and integrations.
				</p>
				<span class="text-base-content/60 text-xs">github.com/externref/marvelrivalsapi</span>
				<div class="border-base-200 mt-4 flex items-center gap-2 border-t pt-2">
					<img
						src="https://avatars.githubusercontent.com/externref"
						alt="externref avatar"
						class="h-6 w-6 rounded-full"
					/>
					<span class="text-base-content/60 text-xs">author: externref</span>
					<span
						class="ml-auto flex items-center gap-1 text-xs text-yellow-500"
						title="GitHub Stars"
					>
						<i class="bi bi-star-fill"></i>
						{stars['externref/marvelrivalsapi'] ?? '—'}
					</span>
				</div>
			</a>
		</div>
	</section>
{/if}

<svelte:head>
	<title>/home/externref</title>
	<meta content="externref" property="og:title" />
	<meta content="personal portfolio and blog." property="og:description" />
	<meta content="/" property="og:url" />
	<meta content="https://externref.duckdns.org/jeff.png" property="og:image" />
	<meta content="#c2a3d6" data-react-helmet="true" name="theme-color" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
