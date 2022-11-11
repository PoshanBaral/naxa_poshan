const fetchNaxaResponse = async() => {
    const response = await fetch("https://admin.naxa.com.np/api/projects")
    const naxaData = await response.json();
    if (response.status >= 400) {
        throw new Error(naxaData.errors);
    }
    return naxaData
}

export { fetchNaxaResponse };
