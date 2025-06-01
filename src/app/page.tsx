import React from 'react';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

export default function Home() {
    return (
        <PageTransition>
            <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24 home-background">
                <div className="z-10 w-full max-w-5xl items-center justify-between text-sm">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-white/70 animate-fade-in">
                        Welcome to AkananuruX
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
                        {services.map((service, index) => (
                            <div
                                key={service.title}
                                className="glass-card group p-4 sm:p-6 transition-all duration-300 hover:scale-105"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <h2 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-semibold text-primary group-hover:text-primary/80 transition-all duration-300">
                                    {service.title}
                                </h2>
                                <p className="m-0 text-sm text-white/70 group-hover:text-white transition-all duration-300">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <Link
                            href="/services"
                            className="glass-button w-full sm:w-auto text-center"
                        >
                            Services
                        </Link>
                    </div>
                </div>
            </main>
        </PageTransition>
    );
}

const services = [
    {
        title: 'Resume Building',
        description: 'Craft a compelling resume that stands out to recruiters.',
    },
    {
        title: 'Profile Optimization',
        description: 'Enhance your LinkedIn and GitHub profiles for better visibility.',
    },
    {
        title: 'Development',
        description: 'Professional software development and debugging services.',
    },
]; 