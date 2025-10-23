import React from 'react';

const winterTips = [
    {
        id: 1,
        title: "Keep Pets Warm",
        description: "Ensure your pets have a warm, cozy place to sleep, away from drafts.",
        icon: "🔥"
    },
    {
        id: 2,
        title: "Protect Their Paws",
        description: "Use pet-safe ice melts and wipe paws after walks to remove salt and chemicals.",
        icon: "🐾"
    },
    {
        id: 3,
        title: "Limit Outdoor Time",
        description: "Shorten walks in very cold weather, especially for short-haired breeds.",
        icon: "⏱️"
    },
    {
        id: 4,
        title: "Proper Nutrition",
        description: "Pets may need more calories in winter to maintain body heat.",
        icon: "🍖"
    }
];

const CareTips = () => {
    return (
        <div>
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Winter Care Tips for Pets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {winterTips.map(tip => (
                            <div key={tip.id} className="card bg-base-100 shadow-lg border border-zinc-100">
                                <div className="card-body text-center">
                                    <div className="text-5xl mb-4">{tip.icon}</div>
                                    <h3 className="card-title justify-center">{tip.title}</h3>
                                    <p>{tip.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareTips;