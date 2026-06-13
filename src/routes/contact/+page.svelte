<script lang="ts">
	import { onMount } from 'svelte';
	import handPointer from '$lib/assets/background/hand_pointer.png';
	import jeffHeadphone from '$lib/assets/jeff_headphone.png';

	import SEOMeta from '$lib/components/SEOMeta.svelte';

	let visible = $state(false);
	let name = $state('');
	let email = $state('');
	let subject = $state('');
	let content = $state('');
	let sending = $state(false);
	let sent = $state(false);
	let error = $state('');

	interface FieldErrors {
		name?: string;
		email?: string;
		subject?: string;
		content?: string;
	}
	let fieldErrors = $state<FieldErrors>({});

	function validate(): boolean {
		const errors: FieldErrors = {};
		if (!name.trim()) errors.name = 'required';
		if (!email.trim()) errors.email = 'required';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'invalid email';
		if (!subject.trim()) errors.subject = 'required';
		if (!content.trim()) errors.content = 'required';
		else if (content.trim().length < 10) errors.content = 'too short';
		fieldErrors = errors;
		return Object.keys(errors).length === 0;
	}

	async function sendMail() {
		if (sending) return;
		if (!validate()) return;
		sending = true;
		error = '';
		try {
			const res = await fetch('/api/email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, subject, content })
			});
			if (res.ok) {
				sent = true;
				name = email = subject = content = '';
				fieldErrors = {};
			} else {
				error = 'Failed to send. Try again.';
			}
		} catch {
			error = 'Something went wrong.';
		} finally {
			sending = false;
		}
	}

	const socials = [
		{
			label: 'GitHub',
			icon: 'bi-github',
			href: 'https://github.com/externref',
			hint: '@externref'
		},
		{
			label: 'LinkedIn',
			icon: 'bi-linkedin',
			href: 'https://linkedin.com/in/defsarthak',
			hint: 'defsarthak'
		},
		{
			label: 'Discord',
			icon: 'bi-discord',
			href: 'https://discord.com/users/1134016724132446208',
			hint: '@externref'
		},

		{
			label: 'Steam',
			icon: 'bi-steam',
			href: 'https://steamcommunity.com/id/externref',
			hint: '@externref'
		},
		{
			label: 'Email',
			icon: 'bi-envelope-fill',
			href: 'mailto:defsarthak@gmail.com',
			hint: 'defsarthak@gmail.com'
		},
		{
			label: 'WakaTime',
			icon: 'bi-clock-fill',
			href: 'https://wakatime.com/@externref',
			hint: '@externref'
		},
		{
			label: 'Instagram',
			icon: 'bi-instagram',
			href: 'https://instagram.com/defsarthak',
			hint: '@defsarthak'
		},
		{
			label: 'Last.fm',
			icon: 'bi-music-note-beamed',
			href: 'https://last.fm/user/defsarthak',
			hint: 'defsarthak'
		}
	];

	onMount(() => setTimeout(() => (visible = true), 200));
</script>

<SEOMeta
	title="/home/externref/contact"
	description="contact me through socials or mail"
	path="/contact"
/>

<div class="projects-bg-wrap md:hidden" class:projects-bg-wrap--in={visible}>
	<img
		src={handPointer}
		alt=""
		class="projects-bg-img bg-black"
		aria-hidden="true"
		style="mix-blend-mode: luminosity; filter: brightness(0.45);"
	/>
	<div class="projects-bg-fade"></div>
</div>

<div
	class="fixed inset-x-0 top-16 bottom-0 z-0 hidden transition-opacity duration-700 ease-out md:block"
	class:opacity-0={!visible}
	class:opacity-100={visible}
>
	<img
		src={handPointer}
		alt=""
		aria-hidden="true"
		class="absolute right-0 bottom-0 h-auto w-[55%] object-contain object-bottom-right"
		style="mix-blend-mode: luminosity; filter: brightness(0.45);"
	/>
	<div class="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent"></div>
	<div class="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black"></div>
</div>

<div class="hero-scanlines" aria-hidden="true"></div>
<div class="hero-grain" aria-hidden="true"></div>

<div class="hero-logo" class:hero-logo--in={visible} aria-hidden="true">
	/home/externref/contact
</div>

<div class="relative z-10 flex min-h-screen flex-col px-6 pt-50 pb-24 lg:px-12 lg:pt-32">
	<h1
		class="mb-10 translate-y-2 opacity-0 transition-all duration-700 ease-out"
		class:translate-y-0={visible}
		class:opacity-100={visible}
		style="font-family: 'Bebas Neue', sans-serif; font-size: clamp(3rem, 8vw, 7rem); line-height: 1; letter-spacing: 0.04em; transition-delay: 100ms;"
	>
		<span class="text-white">Get in</span><span
			style="-webkit-text-stroke: 2px #c8a96e; color: transparent;"
		>
			Touch</span
		>
	</h1>

	<div
		class="flex flex-col gap-10 opacity-0 transition-opacity duration-700 ease-out lg:flex-row lg:items-start lg:gap-16"
		class:opacity-100={visible}
		style="transition-delay: 250ms;"
	>
		<div class="flex flex-col gap-3 lg:w-136 lg:shrink-0">
			<p class="mb-2 font-mono text-[0.6rem] tracking-[0.3em] text-white/30 uppercase">
				// find me on
			</p>
			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{#each socials as social, i}
					<a
						href={social.href}
						target={social.href.startsWith('http') ? '_blank' : undefined}
						rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
						class="group relative flex items-center gap-4 overflow-hidden rounded-xl p-3 no-underline
                           transition-all duration-200"
						style="transition-delay: {i * 60}ms;"
					>
						<div
							class="absolute inset-0 rounded-xl border border-white/[0.07] bg-black/40 backdrop-blur-lg
                                transition-all duration-200 group-hover:border-[#c8a96e]/30 group-hover:bg-black/60"
						></div>
						<div
							class="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
							style="background: linear-gradient(135deg, rgba(200,169,110,0.05), transparent);"
						></div>

						<div
							class="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                border border-white/10 bg-white/4 transition-all duration-200
                                group-hover:border-[#c8a96e]/40 group-hover:bg-[#c8a96e]/10"
						>
							<i
								class="bi {social.icon} text-[1rem] text-white/50 transition-colors duration-200 group-hover:text-[#c8a96e]"
							></i>
						</div>

						<div class="relative z-10 flex flex-col gap-0.5">
							<span
								class="font-mono text-xs font-bold tracking-wider text-white/80 transition-colors duration-200 group-hover:text-white"
							>
								{social.label}
							</span>
							<span
								class="font-mono text-[0.6rem] tracking-wide text-white/30 transition-colors duration-200 group-hover:text-white/50"
							>
								{social.hint}
							</span>
						</div>

						<i
							class="bi bi-arrow-right relative z-10 ml-auto translate-x-0 text-[0.8rem]
                              text-white/20 opacity-0 transition-all duration-200
                              group-hover:translate-x-1 group-hover:text-[#c8a96e] group-hover:opacity-100"
						></i>
					</a>
				{/each}
			</div>
		</div>

		<div class="flex w-full items-stretch gap-3">
			<div class="flex-1">
				<p class="mb-3 font-mono text-[0.6rem] tracking-[0.3em] text-white/30 uppercase">
					// contact with mail
				</p>
				<div class="relative overflow-hidden rounded-2xl">
					<div class="absolute inset-0 bg-black/50 saturate-180 backdrop-blur-xl"></div>
					<div
						class="absolute inset-0 bg-linear-to-br from-[#c8a96e]/6 via-white/1.5 to-black/10"
					></div>
					<div
						class="absolute inset-0 rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]"
					></div>
					<div
						class="absolute top-0 right-[5%] left-[5%] h-px bg-linear-to-r from-transparent via-[#c8a96e]/35 to-transparent"
					></div>

					<div class="relative z-10 flex flex-row gap-0">
						<div class="flex flex-1 flex-col gap-4 p-6">
							<div class="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-5">
								<div
									class="relative hidden shrink-0 overflow-hidden rounded-xl lg:block"
									style="width: 150px;"
								>
									<img
										src={jeffHeadphone}
										alt="Jeff with headphones"
										class="h-full w-full object-cover"
										style="filter: grayscale(0.3) brightness(0.85);"
									/>
									<div class="absolute inset-0 rounded-xl border border-white/10"></div>
									<div
										class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent px-2 py-1.5"
									>
										<p class="font-mono text-[0.5rem] tracking-[0.2em] text-[#c8a96e] uppercase">
											// standing by
										</p>
									</div>
								</div>

								<div class="flex flex-1 flex-col gap-4">
									<div class="flex flex-col gap-4 sm:flex-row">
										<div class="flex flex-1 flex-col gap-1.5">
											<label
												class="font-mono text-[0.6rem] tracking-[0.25em] text-[#c8a96e] uppercase"
												for="name">Name</label
											>
											<input
												id="name"
												type="text"
												bind:value={name}
												placeholder="your name"
												class="rounded-lg border bg-white/4 px-3 py-2.5 font-mono text-xs text-white
                                               placeholder-white/20 transition-colors duration-200 outline-none
                                               focus:bg-white/[0.07]
                                               {fieldErrors.name
													? 'border-red-400/60 focus:border-red-400'
													: 'border-white/10 focus:border-[#c8a96e]/50'}"
											/>
											{#if fieldErrors.name}<span
													class="font-mono text-[0.55rem] tracking-wider text-red-400"
													>{fieldErrors.name}</span
												>{/if}
										</div>
										<div class="flex flex-1 flex-col gap-1.5">
											<label
												class="font-mono text-[0.6rem] tracking-[0.25em] text-[#c8a96e] uppercase"
												for="email">Email</label
											>
											<input
												id="email"
												type="email"
												bind:value={email}
												placeholder="you@example.com"
												class="rounded-lg border bg-white/4 px-3 py-2.5 font-mono text-xs text-white
                                               placeholder-white/20 transition-colors duration-200 outline-none
                                               focus:bg-white/[0.07]
                                               {fieldErrors.email
													? 'border-red-400/60 focus:border-red-400'
													: 'border-white/10 focus:border-[#c8a96e]/50'}"
											/>
											{#if fieldErrors.email}<span
													class="font-mono text-[0.55rem] tracking-wider text-red-400"
													>{fieldErrors.email}</span
												>{/if}
										</div>
									</div>
									<div class="flex flex-col gap-1.5">
										<label
											class="font-mono text-[0.6rem] tracking-[0.25em] text-[#c8a96e] uppercase"
											for="subject">Subject</label
										>
										<input
											id="subject"
											type="text"
											bind:value={subject}
											placeholder="what's this about"
											class="rounded-lg border bg-white/4 px-3 py-2.5 font-mono text-xs text-white
                                           placeholder-white/20 transition-colors duration-200 outline-none
                                           focus:bg-white/[0.07]
                                           {fieldErrors.subject
												? 'border-red-400/60 focus:border-red-400'
												: 'border-white/10 focus:border-[#c8a96e]/50'}"
										/>
										{#if fieldErrors.subject}<span
												class="font-mono text-[0.55rem] tracking-wider text-red-400"
												>{fieldErrors.subject}</span
											>{/if}
									</div>
								</div>
							</div>

							<div class="flex flex-col gap-1.5">
								<label
									class="font-mono text-[0.6rem] tracking-[0.25em] text-[#c8a96e] uppercase"
									for="content">Message</label
								>
								<textarea
									id="content"
									bind:value={content}
									placeholder="write your message here..."
									class="h-44 resize-none rounded-lg border bg-white/4 px-3 py-2.5 font-mono text-xs
                                   leading-6 text-white placeholder-white/20 transition-colors duration-200 outline-none
                                   focus:bg-white/[0.07]
                                   {fieldErrors.content
										? 'border-red-400/60 focus:border-red-400'
										: 'border-white/10 focus:border-[#c8a96e]/50'}"
								></textarea>
								{#if fieldErrors.content}<span
										class="font-mono text-[0.55rem] tracking-wider text-red-400"
										>{fieldErrors.content}</span
									>{/if}
							</div>

							{#if error}
								<p class="font-mono text-[0.65rem] tracking-wider text-red-400">{error}</p>
							{/if}

							<div class="flex items-center gap-4 pt-1">
								<button
									onclick={sendMail}
									disabled={sending}
									class="bg-[#c8a96e] px-8 py-3 font-mono text-xs font-bold tracking-[0.15em] text-black uppercase
                                   transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e0c48a]
                                   disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
								>
									{sending ? 'Sending...' : 'Send'}
								</button>
								{#if sent}
									<span class="font-mono text-[0.65rem] tracking-wider text-[#c8a96e]"
										>✓ message sent</span
									>
								{/if}
							</div>
						</div>

						<div
							class="relative flex w-14 shrink-0 items-center justify-center border-l border-white/[0.07]"
						>
							<a
								href="https://discord.com/users/1134016724132446208"
								target="_blank"
								rel="noopener noreferrer"
								class="group absolute inset-0 flex items-center justify-center no-underline transition-colors duration-200 hover:bg-[#c8a96e]/5"
								aria-label="Message on Discord"
							>
								<span
									class="flex -rotate-90 items-center gap-2 font-mono text-[0.78rem] tracking-[0.2em] whitespace-nowrap text-white/25
                                         uppercase transition-colors duration-200 group-hover:text-[#c8a96e]/70"
								>
									<i class="bi bi-discord text-[#5865F2]" style="font-size: 0.75rem;"></i>
									Or message on Discord
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="fixed bottom-0 left-0 z-20 h-px bg-linear-to-r from-[#c8a96e] to-transparent transition-[width] duration-1200 ease-out"
		class:w-0={!visible}
		class:w-[50%]={visible}
		style="transition-delay: 500ms;"
	></div>
</div>
