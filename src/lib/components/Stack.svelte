<script lang="ts">
	import { onMount } from 'svelte';
	import { blur, fade } from 'svelte/transition';

	let transition = false;

	onMount(() => {
		transition = true;
	});
</script>

{#if transition}
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
{/if}
