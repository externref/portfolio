export class BlogInfo {
	constructor(
		public title: string,
		public description: string,
		public url: string,
		public image?: string,
		public date?: string
	) {}
}

const jeffery = [
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749525475/y96yg44wlct55yf96vgh.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749525476/kpq5faoyvc7jldmp4raw.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749525477/vvziyvpxt21inh2m2eqf.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749525478/h1h8jthmrp1vismxfvbm.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749525479/zfvpphxwucjmjoewds6j.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749525480/sjogkrcg62dysnvrbzhj.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749525481/ntzsswkooamxjdaudi4q.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749525482/ejspvbsufbyojpvitgzj.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749525483/udi3rwyw0iizilzdlndy.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749525485/dzwao0xjubjq6s0emknq.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526162/rtvmhrhon3nadjckc1l5.png",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526163/ujqweebrwethwkpqobkc.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526164/b3369l4cmuxtgtounvbo.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526165/hwmjknuak2p9hnc97dus.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526165/o8udz78dau040kyxwbmz.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526166/gffsc6gjhnfegkxii9xt.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526167/dsnmicsrfsyt7w52lixl.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526168/aaxv3tdpciv7uh9p7fa9.png",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526169/uwnpmhkyzipirntsm1bm.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526169/mnt0vhlxsq9go2ohhsgz.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526171/mflygwlmc8z0beytnxvf.png",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526171/jzcrfoxivhxbyubv1rx7.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526172/hbxgjxw77fk9yf5aiklh.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526173/hgkpdi3uvxkawyrotvuy.jpg",
	"https://res.cloudinary.com/dp3nygaiu/image/upload/v1749526173/qrvacrogjqugp8mlmqmo.jpg"
];
export const getRandomJeffImage = (): string => {
	const randomIndex = Math.floor(Math.random() * jeffery.length);
	return jeffery[randomIndex];
};
