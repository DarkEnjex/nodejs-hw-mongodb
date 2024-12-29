export const buildFilters = (filters) => {
    const filterConditions = {};

    if (filters.type) {
        filterConditions.contactType = filters.type;
    }

    if (filters.isFavourite !== undefined) {
        filterConditions.isFavourite = filters.isFavourite === 'true';
    }

    return filterConditions;
};