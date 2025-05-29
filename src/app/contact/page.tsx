'use client';

import { useState, useEffect } from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';
import PageTransition from '@/components/PageTransition';

export default function Contact() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: '',
    });

    useEffect(() => {
        const serviceParam = searchParams.get('service');
        if (serviceParam) {
            setFormData(prev => ({ ...prev, service: serviceParam }));
        }
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <PageTransition>
            <div className="relative isolate bg-black">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-primary">Get in touch</h2>
                            <p className="mt-6 text-lg leading-8 text-white/70">
                                Ready to enhance your digital presence? Fill out the form and I'll get back to you within 24 hours.
                            </p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-white/70">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Email</span>
                                        <EnvelopeIcon className="h-7 w-6 text-primary" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-white transition-all duration-300" href="mailto:contact@akananurux.com">
                                            contact@akananurux.com
                                        </a>
                                    </dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">LinkedIn</span>
                                        <PhoneIcon className="h-7 w-6 text-primary" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-white transition-all duration-300" href="https://linkedin.com/in/akananurux" target="_blank" rel="noopener noreferrer">
                                            LinkedIn Profile
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                                        Name
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="glass-input w-full"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                                        Email
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="glass-input w-full"
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="service" className="block text-sm font-semibold leading-6 text-white">
                                        Service Interested In
                                    </label>
                                    <div className="mt-2.5">
                                        <select
                                            name="service"
                                            id="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="glass-input w-full"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="resume">Resume Building & Optimization</option>
                                            <option value="linkedin">LinkedIn Profile Enhancement</option>
                                            <option value="github">GitHub Project Setup & Cleanup</option>
                                            <option value="software">Custom Software Projects</option>
                                            <option value="docs">Document Creation</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                                        Message
                                    </label>
                                    <div className="mt-2.5">
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="glass-input w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex justify-end">
                                <button
                                    type="submit"
                                    className="glass-button"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </PageTransition>
    );
} 