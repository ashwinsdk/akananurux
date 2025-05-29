import Image from 'next/image';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

const projects = [
    {
        id: 1,
        title: 'Resume Optimization',
        description: 'Professional resume optimization for a software engineer, resulting in a 40% increase in interview calls.',
        image: '/assets/portfolio/resume-1.jpg',
        category: 'Resume Building',
    },
    {
        id: 2,
        title: 'LinkedIn Profile Enhancement',
        description: 'Complete LinkedIn profile overhaul for a marketing professional, leading to 3x profile views.',
        image: '/assets/portfolio/linkedin-1.jpg',
        category: 'Profile Optimization',
    },
    {
        id: 3,
        title: 'GitHub Portfolio',
        description: 'GitHub profile and project organization for a full-stack developer, improving project visibility.',
        image: '/assets/portfolio/github-1.jpg',
        category: 'GitHub Setup',
    },
    {
        id: 4,
        title: 'Custom Web Application',
        description: 'Full-stack web application development with React and Node.js for a small business.',
        image: '/assets/portfolio/web-1.jpg',
        category: 'Software Development',
    },
];

export default function Portfolio() {
    return (
        <PageTransition>
            <div className="py-24 sm:py-32 bg-black">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Portfolio</h2>
                        <p className="mt-2 text-lg leading-8 text-white/70">
                            Explore some of our recent work and success stories.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {projects.map((project) => (
                            <article key={project.id} className="flex flex-col items-start">
                                <div className="relative w-full group">
                                    <div className="glass-card aspect-[16/9] w-full overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-105">
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                                    </div>
                                </div>
                                <div className="max-w-xl">
                                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                                        <time dateTime="2025-03-20" className="text-white/50">
                                            March 20, 2025
                                        </time>
                                        <span className="relative z-10 rounded-full bg-glass-light px-3 py-1.5 font-medium text-primary">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-primary transition-all duration-300">
                                            <span className="absolute inset-0" />
                                            {project.title}
                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-white/70">{project.description}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
} 