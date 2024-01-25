export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 tranition-all">
        <div className="text-center">
        <img src="/pizza.png" className="max-h-auto max-w-24 block mx-auto" alt="pizzza" />
        </div>
            <h4 className="font-semibold text-xl my-2">
                Pizza
            </h4>
            <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, earum.</p>
            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">Add to cart $12</button>
        </div>
    );
}