import React from 'react';

const expertVets = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Winter Pet Health",
        experience: "12 years",
        image: "https://i.ibb.co.com/9m5sJn18/Dr-Sarah-Johnson.jpg"
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Pet Dermatology",
        experience: "8 years",
        image: "https://i.ibb.co.com/xt8H2J7T/Dr-Michael-Chen.png"
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialty: "Cold Weather Care",
        experience: "10 years",
        image: "https://i.ibb.co.com/nNbBbftF/Dr-Emily-Rodriguez.webp"
    }
];

const Experts = () => {
    return (
        <div>
            <section className="py-12 bg-slate-200 rounded-2xl">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Meet Our Expert Vets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {expertVets.map(vet => (
                            <div key={vet.id} className="card bg-base-100 shadow-xl border border-zinc-100">
                                <figure className="px-4 pt-4">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={vet.image} alt={vet.name} />
                                        </div>
                                    </div>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h3 className="card-title">{vet.name}</h3>
                                    <p className="text-primary font-semibold">{vet.specialty}</p>
                                    <p>Experience: {vet.experience}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Experts;