import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";
import nsd from '../../public/nsd.png'
import aba from '../../public/541.png'
import cfr from '../../public/cfr.png'
import workout from '../../public/workout.png'
import cryptodash from '../../public/cryptodash.png';
import atn from '../../public/ai-therapy-notes.png'
import tradeground from '../../public/tradeground.png'
import sigtakeoffs from '../../public/sigtakeoffs.png'
import Image from "next/image";
export const revalidate = 60;
export default async function ProjectsPage() {

	const projects = [
		{
			title: 'CryptoFaxReport',
			description: 'Led the Frontend development of this software. Technologies include React, MUI, Node.js, Playwright, Hotjar, AWS, and more.',
			href: 'https://cryptofaxreport.com',
			src: cfr
		},
		{
			title: 'AI Therapy Notes',
			description: 'Co-Founder of this Software/Business, I have developed a platform in Next.js that is evolving for different kinds of therapists.',
			href: 'https://ai-therapynotes.vercel.app/',
			src: atn
		},
		{
			title: 'Signature Takeoffs',
			description: 'A full-fledged construction takeoff generation software that utilizes AI to read floorplans and generate takeoffs. Built in Next.js.',
			href: 'https://signature-takeoffs.vercel.app/',
			src: sigtakeoffs
		}
	]

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-1 ">

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						{projects.map((project) => (
							<a href={project.href} target="_blank">
							<Card key={project.title}>
								<Image alt={project.title} src={project.src}/>
								<h2 className="text-white font-bold text-[24px] text-center">{project.title}</h2>
								<p className='text-white text-[16px] text-center'>{project.description}</p>
							</Card>
							</a>
						))}
					</div>
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />
			</div>
		</div>
	);
}
