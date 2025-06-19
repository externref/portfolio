<script lang="ts">
	import { onMount } from 'svelte';
	import { Pie, Line } from 'svelte5-chartjs';
	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		ArcElement,
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement
	} from 'chart.js';

	ChartJS.register(
		Title,
		Tooltip,
		Legend,
		ArcElement,
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement
	);
	let chartData: {
		labels: string[];
		datasets: { label: string; data: number[]; backgroundColor: string[]; borderWidth: number }[];
	};
	let lineChartData: {
		labels: string[];
		datasets: {
			label: string;
			data: number[];
			borderColor: string;
			backgroundColor: string;
			tension: number;
			fill: boolean;
		}[];
	};

	onMount(() => {
		fetch(`https://wakatime.com/share/@externref/7fdbe895-eb54-45d0-922d-782b186209ed.json`)
			.then((response) => response.json())
			.then((data) => {
				const aboveOne = data.data.filter((item: { percent: number }) => item.percent > 0.8);
				const others = data.data.filter((item: { percent: number }) => item.percent <= 0.8);
				const otherSum = others.reduce(
					(sum: number, item: { percent: number }) => sum + item.percent,
					0
				);
				const otherColor = '#cccccc';
				const labels = [
					...aboveOne.map((item: { name: string }) => item.name),
					...(otherSum > 0 ? ['Other'] : [])
				];
				const dataArr = [
					...aboveOne.map((item: { percent: number }) => item.percent),
					...(otherSum > 0 ? [otherSum] : [])
				];
				const backgroundColor = [
					...aboveOne.map((item: { color: string }) => item.color),
					...(otherSum > 0 ? [otherColor] : [])
				];
				chartData = {
					labels,
					datasets: [
						{
							label: 'Languages',
							data: dataArr,
							backgroundColor,
							borderWidth: 0
						}
					]
				};
			})
			.catch((error) => {
				console.error('Error fetching chart data:', error);
			});

		fetch('https://wakatime.com/share/@externref/a788515d-310b-472b-990f-17c5665a938d.json')
			.then((response) => response.json())
			.then((data) => {
				const allCategories = Array.from(
					new Set(data.days.flatMap((d: any) => d.categories.map((c: any) => c.name)))
				) as string[];
				const datasets = allCategories.map((cat, idx) => {
					const color = `hsl(${(idx * 360) / allCategories.length}, 70%, 55%)`;
					return {
						label: cat,
						data: data.days.map((day: any) => {
							const found = day.categories.find((c: any) => c.name === cat);
							return found ? found.total : 0;
						}),
						borderColor: color,
						backgroundColor: color,
						tension: 0.3,
						fill: false
					};
				});
				lineChartData = {
					labels: data.days.map((d: any) => d.date),
					datasets
				};
			})
			.catch((error) => {
				console.error('Error fetching line chart data:', error);
			});
	});
</script>

<h2 class="mb-4 text-center text-2xl font-bold">Productivity Breakdown (Yearly)</h2>
<p class="mb-8 text-center text-gray-500">
	Data sourced from <a
		href="https://wakatime.com/"
		class="underline hover:text-blue-600"
		target="_blank"
		rel="noopener">Wakatime</a
	>
</p>
<div class="mx-auto mt-8 w-full max-w-2xl">
	<Line
		data={lineChartData}
		options={{
			plugins: {
				legend: { display: true, position: 'top' },
				title: { display: true, text: 'Category Totals Over Time' }
			},
			animation: {
				duration: 1200,
				easing: 'easeOutCubic'
			},
			responsive: true,
			maintainAspectRatio: false,
			elements: {
				line: {
					borderWidth: 2,
					borderDash: [],
					tension: 0.3,
					fill: false
				},
				point: {
					radius: 3,
					hoverRadius: 6,
					backgroundColor: undefined,
					borderWidth: 1,
					borderColor: (ctx: any) => ctx.dataset.borderColor
				}
			},
			scales: {
				x: { title: { display: true, text: 'Date' } },
				y: { title: { display: true, text: 'Total (minutes)' }, beginAtZero: true }
			}
		}}
		style="min-height: 300px; height: 40vw; max-height: 400px; width: 100%;"
	/>
</div>

<h2 class="mt-12 mb-4 text-center text-2xl font-bold">Language Usage (Pie Chart)</h2>
<p class="mb-8 text-center text-gray-500">
	Data sourced from <a
		href="https://wakatime.com/"
		class="underline hover:text-blue-600"
		target="_blank"
		rel="noopener">Wakatime</a
	>
</p>
<div
	class="max-h-lg sm:max-h-xl mx-auto mt-8 flex w-full max-w-lg items-center justify-center sm:max-w-xl"
>
	<Pie
		data={chartData}
		options={{
			plugins: {
				legend: { display: true, position: 'bottom' },
				title: { display: false }
			},
			animation: {
				animateRotate: true,
				animateScale: true,
				duration: 1200,
				easing: 'easeOutBounce'
			},
			responsive: true,
			maintainAspectRatio: false,
			elements: {
				arc: {
					borderWidth: 0,
					backgroundColor: (ctx: any) => {
						const dataset = ctx.dataset;
						return Array.isArray(dataset.backgroundColor)
							? dataset.backgroundColor[ctx.dataIndex]
							: dataset.backgroundColor;
					},
					hoverBackgroundColor: (ctx: any) => {
						const dataset = ctx.dataset;
						let color = Array.isArray(dataset.backgroundColor)
							? dataset.backgroundColor[ctx.dataIndex]
							: dataset.backgroundColor;
						if (typeof color === 'string' && color.startsWith('#')) {
							let c = color.substring(1);
							if (c.length === 3)
								c = c
									.split('')
									.map((x) => x + x)
									.join('');
							const num = parseInt(c, 16);
							let r = Math.min(255, ((num >> 16) & 0xff) + 40);
							let g = Math.min(255, ((num >> 8) & 0xff) + 40);
							let b = Math.min(255, (num & 0xff) + 40);
							return `rgb(${r},${g},${b})`;
						}
						return color;
					}
				}
			}
		}}
		style="min-height: 320px; height: 90vw; max-height: 420px; width: 100%;"
	/>
</div>
