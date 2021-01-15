export const getSearchTermHandler = (id) => {
    const rawSearchTerm = document.querySelector(id).value.trim();
    const regex = /[ ]{2,}/gi;
    const searchTerm = rawSearchTerm.replaceAll(regex, ' ');

    return searchTerm;
}