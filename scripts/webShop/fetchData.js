const data = {}

data.fetchProducts = async () => {
    try {
        const response = await fetch('../../data/products.json');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    };
};

export default data;