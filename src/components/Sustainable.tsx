"use client";
import React, { useState, useEffect } from 'react';

interface SavedDataItem {
    id: number;
    title: string;
    subtitle: string;
    paragraph: string;
    imagePath: string | null;
    imagePreview: string | null;
    createdAt: string;
    fileName: string | null;
    fileSize: number | null;
}

// Configure your API URL for Next.js (same as admin)
const API_BASE_URL = '/api';

const Sustainable: React.FC = () => {
    const [sustainableData, setSustainableData] = useState<SavedDataItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch data from the same API endpoint used by admin
    useEffect(() => {
        fetchSustainableData();
    }, []);

    const fetchSustainableData = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await fetch(`${API_BASE_URL}/data`);
            
            if (response.ok) {
                const data = await response.json();
                console.log('Loaded sustainable data:', data);
                setSustainableData(data);
            } else {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error fetching sustainable data:', error);
            setError(error instanceof Error ? error.message : 'Unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
                    <div className="text-lg text-gray-600">Loading sustainable content...</div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
                    <div className="text-red-500 mb-4">
                        <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Error Loading Content</h2>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <button 
                        onClick={fetchSustainableData}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    // Empty state
    if (sustainableData.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md">
                    <div className="text-gray-400 mb-4">
                        <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">No Sustainable Content Found</h2>
                    <p className="text-gray-600 mb-4">
                        No content has been published yet. Please check back later or contact the administrator.
                    </p>
                    <button 
                        onClick={fetchSustainableData}
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                    >
                        Refresh
                    </button>
                </div>
            </div>
        );
    }

    // Main content
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 flex items-center justify-center">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Sustainable Living
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover ways to live more sustainably and make a positive impact on our planet
                    </p>
                </div>
                
                {/* Content Cards */}
                <div className="space-y-12">
                    {sustainableData.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                            }`}
                        >
                            <div className={`flex flex-col lg:flex-row`}>
                                {/* Image Section */}
                                <div className="lg:w-1/2">
                                    {item.imagePreview ? (
                                        <img
                                            src={item.imagePreview}
                                            alt={item.title}
                                            className="w-full h-64 lg:h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-64 bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center">
                                            <div className="text-center text-white">
                                                <svg className="w-20 h-20 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
                                                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
                                                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
                                                </svg>
                                                <p className="text-lg font-medium">Sustainable Future</p>
                                                <p className="text-sm opacity-75">Environmental Content</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                                                {item.title}
                                            </h2>
                                            
                                            <h3 className="text-xl lg:text-2xl text-green-600 font-semibold">
                                                {item.subtitle}
                                            </h3>
                                        </div>
                                        
                                        <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                                            {item.paragraph}
                                        </p>
                                        
                                        {/* Metadata */}
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gray-200 space-y-2 sm:space-y-0">
                                            <div className="text-sm text-gray-500">
                                                <span className="font-medium">Published:</span>{' '}
                                                {new Date(item.createdAt).toLocaleDateString('en-US', { 
                                                    year: 'numeric', 
                                                    month: 'long', 
                                                    day: 'numeric' 
                                                })}
                                            </div>
                                            
                                            {item.fileName && (
                                                <div className="text-sm text-gray-500">
                                                    <span className="font-medium">Image:</span> {item.fileName}
                                                    {item.fileSize && (
                                                        <span className="ml-1">
                                                            ({(item.fileSize / 1024 / 1024).toFixed(2)} MB)
                                                        </span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                            {sustainableData.length}
                        </div>
                        <div className="text-gray-600">
                            {sustainableData.length === 1 ? 'Article' : 'Articles'} Published
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                            {sustainableData.filter(item => item.imagePreview).length}
                        </div>
                        <div className="text-gray-600">Visual Stories</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                            {sustainableData.reduce((total, item) => total + item.paragraph.split(' ').length, 0)}
                        </div>
                        <div className="text-gray-600">Words of Wisdom</div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Sustainable;