<script lang="ts">
    import peaceSymbol from '$lib/assets/peace.png';

    interface Props {
        visible?: boolean;
    }

    let { visible = false }: Props = $props();

    const stack = [
        { name: 'SvelteKit',        class: 'devicon-svelte-plain',          colored: true  },
        { name: 'TypeScript',       class: 'devicon-typescript-plain',      colored: true  },
        { name: 'TailwindCSS',      class: 'devicon-tailwindcss-plain',     colored: true  },
        { name: 'PostgreSQL',       class: 'devicon-postgresql-plain',      colored: true  },
        { name: 'Vercel',           class: 'devicon-vercel-plain',          colored: false },
        { name: 'Vite',             class: 'devicon-vitejs-plain',          colored: true  },
        { name: 'Devicon',          class: 'devicon-devicon-plain',         colored: true  },
        { name: 'Bootstrap Icons',  class: 'devicon-bootstrap-plain',       colored: true  },
        { name: 'mdsvex',           class: 'devicon-markdown-original',     colored: false },
        { name: 'Nodemailer',       class: 'devicon-nodejs-plain',          colored: true  },
    ];
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/devicon@2.16.0/devicon.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
</svelte:head>

<article class="group relative overflow-hidden rounded-2xl">
    <div class="absolute inset-0 bg-black/50 saturate-180 backdrop-blur-xl"></div>
    <div class="absolute inset-0 bg-linear-to-br from-[#c8a96e]/[0.09] via-white/[0.02] to-black/10"></div>
    <div class="absolute inset-0 rounded-2xl border border-[#c8a96e]/20 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(200,169,110,0.15)]"></div>
    <div class="absolute top-0 right-[5%] left-[5%] h-px bg-linear-to-r from-transparent via-[#c8a96e]/60 to-transparent"></div>

    <div class="relative z-10 flex flex-col gap-5 p-6 md:flex-row md:items-center md:gap-10">

        <div class="flex flex-1 flex-col gap-4">
            <div class="flex items-center gap-3">
                <span class="font-mono text-[0.6rem] tracking-[0.3em] text-[#c8a96e]/70 uppercase">// this site</span>
                <span class="h-px flex-1 bg-[#c8a96e]/20"></span>
            </div>

            <h2
                class="m-0 leading-none tracking-[0.04em]"
                style="font-family: 'Bebas Neue', sans-serif; font-size: clamp(2rem, 5vw, 3.5rem);"
            >
                <span class="text-white">externref.de</span><span style="-webkit-text-stroke: 1.5px #c8a96e; color: transparent;">v</span>
            </h2>

            <p class="m-0 font-mono text-xs leading-6 text-white/50 md:max-w-sm">
                personal portfolio built with SvelteKit, TailwindCSS and TypeScript. dark aesthetic with acrylic glassmorphism, art inspired visuals and zero frameworks bloat.
            </p>

            <div class="flex flex-wrap items-center gap-2 pt-1">
                <a
                    href="https://github.com/externref/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3
                           py-1.5 font-mono text-[0.65rem] tracking-wider text-white/60
                           no-underline transition-all duration-200 hover:border-white/20 hover:text-white/90"
                >
                    <i class="bi bi-github text-sm"></i>
                    <span>Code</span>
                </a>
                <a
                    href="https://externref.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-1.5 rounded-lg bg-[#c8a96e] px-3 py-1.5 font-mono
                           text-[0.65rem] tracking-wider text-black
                           no-underline transition-all duration-200 hover:bg-[#e0c48a]"
                >
                    <i class="bi bi-box-arrow-up-right text-sm"></i>
                    <span>Live</span>
                </a>
                <a
                    href="/attr"
                    class="flex items-center gap-1.5 rounded-lg border border-[#c8a96e]/30 bg-[#c8a96e]/[0.06] px-3
                           py-1.5 font-mono text-[0.65rem] tracking-wider text-[#c8a96e]/80
                           no-underline transition-all duration-200 hover:border-[#c8a96e]/60 hover:text-[#c8a96e]"
                >
                    <i class="bi bi-heart text-sm"></i>
                    <span>Attributions</span>
                </a>
            </div>
        </div>

        <div class="flex flex-col gap-3">
            <span class="font-mono text-[0.55rem] tracking-[0.3em] text-white/25 uppercase">built with</span>
            <div class="flex flex-wrap gap-3">
                {#each stack as tech}
                    <div class="group/icon relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-all duration-200 hover:border-[#c8a96e]/30 hover:bg-[#c8a96e]/[0.06]">
                        <i
                            class="{tech.class} {tech.colored ? 'colored' : ''} text-[1.4rem]"
                            style={!tech.colored ? 'color: rgba(255,255,255,0.5)' : ''}
                            title={tech.name}
                        ></i>
                        <span class="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-black/90 px-2 py-0.5
                                     font-mono text-[0.55rem] tracking-wider text-[#e8d5b0] whitespace-nowrap
                                     opacity-0 transition-opacity duration-150 group-hover/icon:opacity-100
                                     border border-[#c8a96e]/20">
                            {tech.name}
                        </span>
                    </div>
                {/each}
            </div>
        </div>

    </div>

 <img
		src={peaceSymbol}
		alt=""
		aria-hidden="true"
		class="absolute right-4 bottom-4 z-20 h-9 w-9 rotate-14 object-contain opacity-50 transition-opacity duration-300 group-hover:opacity-100"
	/>
</article>