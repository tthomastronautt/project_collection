const charactersData = {};

charactersData.fetchData = async () => {
    try {
        const response = await fetch('../data/characters.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching or parsing data', error);
    };
};

export default charactersData;