<script lang="ts">
	import { onMount } from "svelte";
    import {blur, fade} from "svelte/transition"
    import { fetchGitHubStars } from '../lib/githubStars';

    let transition = false;

    onMount(()=>{
        transition=true
    })

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
<section class="flex flex-col items-center justify-center min-h-[60vh] py-12 text-center bg-base-100 dark:bg-base-200"
  in:fade={{ duration: 600 }} out:fade={{ duration: 400 }} >
  <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4 transition-all duration-500 hover:scale-105">
    Hi, I'm <span class="inline-block transition-transform duration-500 hover:scale-110">Sarthak</span>
  </h1>
  <p class="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-base-content dark:text-base-content/80 mb-6 transition-opacity duration-500 hover:opacity-90">
    I'm a developer who enjoys building, automating, and scripting with Python, Rust, and web technologies. I care about open source and the command line, and I like to keep things efficient—but when the work is done, you'll probably catch me gaming.
  </p>
  <div class="flex flex-wrap justify-center gap-4 mb-2">
    <a href="https://github.com/externref" target="_blank" rel="noopener" class="btn btn-ghost text-lg flex items-center gap-2 transition-transform duration-300 hover:scale-110"><i class="bi bi-github"></i>GitHub</a>
    <a href="https://steamcommunity.com/id/externref" target="_blank" rel="noopener" class="btn btn-ghost text-lg flex items-center gap-2 transition-transform duration-300 hover:scale-110"><i class="bi bi-steam"></i>Steam</a>
  </div>
</section>

<section class="max-w-7xl mx-auto my-12 px-4">
  <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-primary text-center">Tech Stack & Tools</h2>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <!-- Languages -->
    <div transition:blur={{duration:1000}} class="bg-base-100 dark:bg-base-200 rounded-xl shadow p-6 flex flex-col items-center">
      <h3 class="text-lg font-semibold mb-4 text-primary text-center">Languages</h3>
      <div class="grid grid-cols-3 gap-4">
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Python</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/rust.svg" alt="Rust" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Rust</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">TypeScript</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">JavaScript</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">C</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">C++</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Java</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg" alt="Julia" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Julia</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" alt="Scala" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Scala</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">HTML</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">CSS</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SCSS" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">SCSS</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg" alt="Lua" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Lua</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/gleam.svg" alt="Gleam" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Gleam</span>
          
        </div>
      </div>
    </div>
    <!-- Frameworks -->
    <div transition:blur={{duration:1000}} class="bg-base-100 dark:bg-base-200 rounded-xl shadow p-6 flex flex-col items-center">
      <h3 class="text-lg font-semibold mb-4 text-primary text-center">Frameworks</h3>
      <div class="grid grid-cols-3 gap-4">
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Svelte</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Angular</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">FastAPI</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://rocket.rs/images/logo-boxed.png" alt="Rocket.rs" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Rocket.rs</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Flask</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="ExpressJS" class="w-8 h-8 mb-1 bg-white rounded"/>
            <span class="text-xs sm:text-sm">ExpressJS</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg" alt="Fastify" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Fastify</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Vue.js</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">React</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" class="w-8 h-8 mb-1 bg-white rounded"/>
            <span class="text-xs sm:text-sm">Next.js</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Django</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">FastAPI</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Flask</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">ReactNative</span>
          
        </div>
      </div>
    </div>
    <!-- Databases -->
    <div transition:blur={{duration:1000}} class="bg-base-100 dark:bg-base-200 rounded-xl shadow p-6 flex flex-col items-center">
      <h3  class="text-lg font-semibold mb-4 text-primary text-center">Databases</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">PostgreSQL</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">MySQL</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">MongoDB</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="SQLite3" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">SQLite3</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" alt="MariaDB" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">MariaDB</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Redis</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="Oracle" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Oracle</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Firebase</span>
          
        </div>
      </div>
    </div>
    <!-- Tools -->
    <div transition:blur={{duration:1000}} class="bg-base-100 dark:bg-base-200 rounded-xl shadow p-6 flex flex-col items-center">
      <h3  class="text-lg font-semibold mb-4 text-primary text-center">Tools</h3>
      <div class="grid grid-cols-3 gap-4">
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">GitHub</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Git</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg" alt="Neovim" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Neovim</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">VSCode</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" alt="IntelliJ IDEA" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">IntelliJIDEA</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://resources.jetbrains.com/storage/products/company/brand/logos/WebStorm_icon.svg" alt="WebStorm" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">WebStorm</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://resources.jetbrains.com/storage/products/company/brand/logos/PyCharm_icon.svg" alt="PyCharm" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">PyCharm</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://www.sublimehq.com/images/sublime_text.png" alt="Sublime Text" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">SublimeText</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://zed.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_wordmark_white_bigger.2c31c722.png&w=1920&q=100" alt="Zed" class="w-8 h-8 mb-1 bg-black rounded"/>
            <span class="text-xs sm:text-sm">Zed</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fishshell.svg" alt="Fish Shell" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Fish Shell</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Bash</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://www.zsh.org/color_vertical_icon.png" alt="Zsh" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Zsh</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vercel.svg" alt="Vercel" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Vercel</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/render.svg" alt="Render" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Render</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitLens" class="w-8 h-8 mb-1 opacity-70"/>
            <span class="text-xs sm:text-sm">GitLens</span>
          
        </div>
        <div class="flex flex-col items-center">
          
            <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/githubcopilot.svg" alt="Copilot" class="w-8 h-8 mb-1"/>
            <span class="text-xs sm:text-sm">Copilot</span>
          
        </div>
      </div>
    </div>
  </div>
</section>

<section id="projects" class="max-w-7xl mx-auto my-12 px-4">
  <h2 class="text-2xl sm:text-3xl font-bold mb-4 text-primary text-center">Projects</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Wyvern -->
    <a href="https://github.com/externref/wyvern" target="_blank" rel="noopener" class="bg-base-100 dark:bg-base-200 rounded-xl shadow p-6 flex flex-col hover:scale-[1.03] transition-transform">
      <div class="flex items-center gap-2 mb-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-6 h-6"/>
        <h3 class="text-lg font-semibold text-primary">Wyvern</h3>
      </div>
      <p class="text-base-content/80 text-sm mb-2">A Discord API wrapper written in Python, designed for building bots and automation with ease.</p>
      <span class="text-xs text-base-content/60">github.com/externref/wyvern</span>
      <div class="flex items-center gap-2 mt-4 pt-2 border-t border-base-200">
        <img src="https://avatars.githubusercontent.com/externref" alt="externref avatar" class="w-6 h-6 rounded-full"/>
        <span class="text-xs text-base-content/60">author: externref</span>
        <span class="ml-auto flex items-center gap-1 text-xs text-yellow-500" title="GitHub Stars">
          <i class="bi bi-star-fill"></i> {stars['externref/wyvern'] ?? '—'}
        </span>
      </div>
    </a>
    <!-- AOI -->
    <a href="https://github.com/externref/aoi" target="_blank" rel="noopener" class="bg-base-100 dark:bg-base-200 rounded-xl shadow p-6 flex flex-col hover:scale-[1.03] transition-transform">
      <div class="flex items-center gap-2 mb-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-6 h-6"/>
        <h3 class="text-lg font-semibold text-primary">Aoi</h3>
      </div>
      <p class="text-base-content/80 text-sm mb-2">A simple SQLite wrapper for the terminal, making database management and queries easy from the command line.</p>
      <span class="text-xs text-base-content/60">github.com/externref/aoi</span>
      <div class="flex items-center gap-2 mt-4 pt-2 border-t border-base-200">
        <img src="https://avatars.githubusercontent.com/externref" alt="externref avatar" class="w-6 h-6 rounded-full"/>
        <span class="text-xs text-base-content/60">author: externref</span>
        <span class="ml-auto flex items-center gap-1 text-xs text-yellow-500" title="GitHub Stars">
          <i class="bi bi-star-fill"></i> {stars['externref/aoi'] ?? '—'}
        </span>
      </div>
    </a>
    <!-- Glyph -->
    <a href="https://github.com/externref/glyph" target="_blank" rel="noopener" class="bg-base-100 dark:bg-base-200 rounded-xl shadow p-6 flex flex-col hover:scale-[1.03] transition-transform">
      <div class="flex items-center gap-2 mb-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg" alt="Svelte" class="w-6 h-6"/>
        <h3 class="text-lg font-semibold text-primary">Glyph</h3>
      </div>
      <p class="text-base-content/80 text-sm mb-2">A fast, minimal pastebin service for sharing code and text snippets online.</p>
      <span class="text-xs text-base-content/60">github.com/externref/glyph</span>
      <div class="flex items-center gap-2 mt-4 pt-2 border-t border-base-200">
        <img src="https://avatars.githubusercontent.com/externref" alt="externref avatar" class="w-6 h-6 rounded-full"/>
        <span class="text-xs text-base-content/60">author: externref</span>
        <span class="ml-auto flex items-center gap-1 text-xs text-yellow-500" title="GitHub Stars">
          <i class="bi bi-star-fill"></i> {stars['externref/glyph'] ?? '—'}
        </span>
      </div>
    </a>
    <!-- Synap -->
    <a href="https://github.com/externref/synap" target="_blank" rel="noopener" class="bg-base-100 dark:bg-base-200 rounded-xl shadow p-6 flex flex-col hover:scale-[1.03] transition-transform">
      <div class="flex items-center gap-2 mb-2">
        <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/rust.svg" alt="Rust" class="w-6 h-6"/>
        <h3 class="text-lg font-semibold text-primary">Synap</h3>
      </div>
      <p class="text-base-content/80 text-sm mb-2">A Neofetch-like application for fetching and displaying system information in the terminal.</p>
      <span class="text-xs text-base-content/60">github.com/externref/synap</span>
      <div class="flex items-center gap-2 mt-4 pt-2 border-t border-base-200">
        <img src="https://avatars.githubusercontent.com/externref" alt="externref avatar" class="w-6 h-6 rounded-full"/>
        <span class="text-xs text-base-content/60">author: externref</span>
        <span class="ml-auto flex items-center gap-1 text-xs text-yellow-500" title="GitHub Stars">
          <i class="bi bi-star-fill"></i> {stars['externref/synap'] ?? '—'}
        </span>
      </div>
    </a>
    <!-- Macro -->
    <a href="https://github.com/externref/macro" target="_blank" rel="noopener" class="bg-base-100 dark:bg-base-200 rounded-xl shadow p-6 flex flex-col hover:scale-[1.03] transition-transform">
      <div class="flex items-center gap-2 mb-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-6 h-6"/>
        <h3 class="text-lg font-semibold text-primary">Macro</h3>
      </div>
      <p class="text-base-content/80 text-sm mb-2">A lightweight webserver framework for building fast and simple web applications.</p>
      <span class="text-xs text-base-content/60">github.com/externref/macro</span>
      <div class="flex items-center gap-2 mt-4 pt-2 border-t border-base-200">
        <img src="https://avatars.githubusercontent.com/externref" alt="externref avatar" class="w-6 h-6 rounded-full"/>
        <span class="text-xs text-base-content/60">author: externref</span>
        <span class="ml-auto flex items-center gap-1 text-xs text-yellow-500" title="GitHub Stars">
          <i class="bi bi-star-fill"></i> {stars['externref/macro'] ?? '—'}
        </span>
      </div>
    </a>
    <!-- Space -->
    <a href="https://github.com/externref/space" target="_blank" rel="noopener" class="bg-base-100 dark:bg-base-200 rounded-xl shadow p-6 flex flex-col hover:scale-[1.03] transition-transform">
      <div class="flex items-center gap-2 mb-2">
        <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/rust.svg" alt="Rust" class="w-6 h-6"/>
        <h3 class="text-lg font-semibold text-primary">Space</h3>
      </div>
      <p class="text-base-content/80 text-sm mb-2">A JSON-based data storage system for simple and flexible data persistence.</p>
      <span class="text-xs text-base-content/60">github.com/externref/space</span>
      <div class="flex items-center gap-2 mt-4 pt-2 border-t border-base-200">
        <img src="https://avatars.githubusercontent.com/externref" alt="externref avatar" class="w-6 h-6 rounded-full"/>
        <span class="text-xs text-base-content/60">author: externref</span>
        <span class="ml-auto flex items-center gap-1 text-xs text-yellow-500" title="GitHub Stars">
          <i class="bi bi-star-fill"></i> {stars['externref/space'] ?? '—'}
        </span>
      </div>
    </a>
    <!-- Dawn -->
    <a href="https://github.com/externref/dawn" target="_blank" rel="noopener" class="bg-base-100 dark:bg-base-200 rounded-xl shadow p-6 flex flex-col hover:scale-[1.03] transition-transform">
      <div class="flex items-center gap-2 mb-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-6 h-6"/>
        <h3 class="text-lg font-semibold text-primary">Dawn</h3>
      </div>
      <p class="text-base-content/80 text-sm mb-2">A command handler for the Hikari library, making Discord bot command management easy and efficient.</p>
      <span class="text-xs text-base-content/60">github.com/externref/dawn</span>
      <div class="flex items-center gap-2 mt-4 pt-2 border-t border-base-200">
        <img src="https://avatars.githubusercontent.com/externref" alt="externref avatar" class="w-6 h-6 rounded-full"/>
        <span class="text-xs text-base-content/60">author: externref</span>
        <span class="ml-auto flex items-center gap-1 text-xs text-yellow-500" title="GitHub Stars">
          <i class="bi bi-star-fill"></i> {stars['externref/dawn'] ?? '—'}
        </span>
      </div>
    </a>
    <!-- MarvelRivalsAPI -->
    <a href="https://github.com/externref/marvelrivalsapi" target="_blank" rel="noopener" class="bg-base-100 dark:bg-base-200 rounded-xl shadow p-6 flex flex-col hover:scale-[1.03] transition-transform" in:fade={{duration:400}}>
      <div class="flex items-center gap-2 mb-2">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="w-6 h-6"/>
        <h3 class="text-lg font-semibold text-primary">MarvelRivalsAPI</h3>
      </div>
      <p class="text-base-content/80 text-sm mb-2">A Python API wrapper for Marvel Rivals, providing easy access to game data and stats for bots, tools, and integrations.</p>
      <span class="text-xs text-base-content/60">github.com/externref/marvelrivalsapi</span>
      <div class="flex items-center gap-2 mt-4 pt-2 border-t border-base-200">
        <img src="https://avatars.githubusercontent.com/externref" alt="externref avatar" class="w-6 h-6 rounded-full"/>
        <span class="text-xs text-base-content/60">author: externref</span>
        <span class="ml-auto flex items-center gap-1 text-xs text-yellow-500" title="GitHub Stars">
          <i class="bi bi-star-fill"></i> {stars['externref/marvelrivalsapi'] ?? '—'}
        </span>
      </div>
    </a>
  </div>
</section>
{/if}
