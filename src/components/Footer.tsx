'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black/50 border-t border-blue-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-blue-400">AkananuruX</h3>
                        <p className="text-gray-400">
                            Transforming ideas into digital excellence through innovative web solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-blue-300 transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-blue-300 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="mailto:akananurux@gmail.com" className="hover:text-blue-300 transition-colors">
                                    Email: akananurux@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/akananurux" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                                    LinkedIn: akananurux
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/akananurux/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                                    Instagram: @akananurux
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/akananurux" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                                    X: @akananurux
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-blue-900/20">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} AkananuruX. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
} 