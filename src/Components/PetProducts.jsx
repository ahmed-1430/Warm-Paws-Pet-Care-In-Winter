import React from 'react';

const PetProducts = () => {
    return (
        <div>
             <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Winter Pet Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Essential Winter Gear</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Insulated winter coats and sweaters</li>
                <li>Waterproof booties for paw protection</li>
                <li>Heated pet beds and blankets</li>
                <li>Pet-safe ice melt and de-icers</li>
                <li>Moisturizing paw balms</li>
              </ul>
              <button className="btn btn-primary">Shop Now</button>
            </div>
            <div>
              <img 
                src="https://i.ibb.co.com/NdhKxXLs/winter-pet-products.jpg" 
                alt="Winter Pet Products" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>            
        </div>
    );
};

export default PetProducts;