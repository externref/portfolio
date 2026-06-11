import nodemailer from 'nodemailer';
import {
	MAIL_SMTP_HOST,
	MAIL_SMTP_PORT,
	MAIL_SMTP_PASS,
	MAIL_SMTP_USER
} from '$env/static/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const transporter = nodemailer.createTransport({
	host: MAIL_SMTP_HOST,
	port: parseInt(MAIL_SMTP_PORT),
	secure: false,
	auth: {
		user: MAIL_SMTP_USER,
		pass: MAIL_SMTP_PASS
	}
});

interface Payload {
	name: string;
	email: string;
	subject: string;
	content: string;
}

export const POST: RequestHandler = async ({ request }) => {
	let data: Payload = await request.json();
	try {
		const info = await transporter.sendMail({
			from: '"Contact Page - " <externref.dev>',
			to: 'defsarthak@gmail.com',
			subject: data.subject,
			text: `${data.name} (${data.email})\n\n${data.content}`
		});
		return json!({
			success: true
		});
	} catch (err) {
		console.log(err);
		return json({
			success: false
		});
	}
};
