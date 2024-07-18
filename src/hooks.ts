import { useState } from 'react';

interface Product {
    id: string;
    title: string;
    image: string;
    price: string;
    rating: string;
    basePrice: number;
    discountPercentage: string;
    discountPrice: number;
    stock: number;
    brand: string;
    category: string;
    description: string;
}

const useFilter = (data: Product[]) => {
    const [filteredData, setFilteredData] = useState<Product[]>(data);

    const filterData = (searchTerm: string) => {
        const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return { filteredData, filterData };
};

export default useFilter;
