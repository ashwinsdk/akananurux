import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';
import PageTransition from '@/components/PageTransition';

const services = [
    {
        id: 'resume',
        name: 'Resume Building & Optimization',
        description: 'Craft a compelling resume that stands out to recruiters and showcases your skills effectively.',
        price: {
            inr: '₹500',
            usd: '$7',
        },
        features: [
            'Professional ATS-friendly format',
            'Keyword optimization for your industry',
            'Achievement-focused content',
            'Multiple format options (PDF, Word)',
            'One round of revisions included',
        ],
    },
    {
        id: 'linkedin',
        name: 'LinkedIn Profile Enhancement',
        description: 'Optimize your LinkedIn presence to attract opportunities and build your professional network.',
        price: {
            inr: '₹750',
            usd: '$10',
        },
        features: [
            'Profile headline optimization',
            'About section enhancement',
            'Experience section restructuring',
            'Skills & endorsements optimization',
            'Profile picture & banner recommendations',
        ],
    },
    {
        id: 'github',
        name: 'GitHub Project Setup & Cleanup',
        description: 'Organize and showcase your code projects professionally with proper documentation and structure.',
        price: {
            inr: '₹1000',
            usd: '$15',
        },
        features: [
            'Repository structure optimization',
            'README.md enhancement',
            'Code documentation',
            'GitHub profile customization',
            'Project showcase setup',
        ],
    },
    {
        id: 'software',
        name: 'Custom Software Projects',
        description: 'Build custom software solutions tailored to your specific needs and requirements.',
        price: {
            inr: '₹5000',
            usd: '$70',
        },
        features: [
            'Requirements analysis',
            'Technical architecture design',
            'Full-stack development',
            'Testing & deployment',
            'Documentation & maintenance',
        ],
    },
    {
        id: 'docs',
        name: 'Document Creation',
        description: 'Professional document creation services for Word, Excel, and PowerPoint.',
        price: {
            inr: '₹300',
            usd: '$5',
        },
        features: [
            'Professional templates',
            'Data visualization',
            'Formatting & styling',
            'Content organization',
            'Multiple format support',
        ],
    },
];

export default function Services() {
    return (
        <PageTransition>
            <div className="py-24 sm:py-32 bg-black">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">Our Services</h2>
                        <p className="mt-2 text-lg leading-8 text-white/70">
                            Choose from our range of professional services to enhance your digital presence and technical capabilities.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className="glass-card group p-8 transition-all duration-300 hover:scale-105"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-x-4">
                                        <h3 className="text-lg font-semibold leading-8 text-white group-hover:text-primary transition-all duration-300">{service.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-primary">
                                            {service.price.inr} / {service.price.usd}
                                        </p>
                                    </div>
                                    <p className="mt-4 text-sm leading-6 text-white/70">{service.description}</p>
                                    <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-white/70">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link
                                    href={`/contact?service=${service.id}`}
                                    className="glass-button mt-8 block text-center"
                                >
                                    Get This Service
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
} 