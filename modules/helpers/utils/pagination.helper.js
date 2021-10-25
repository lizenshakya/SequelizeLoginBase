exports.buildPageParams = function (filter) {
    const page = filter.page ? parseInt(filter.page) : 1;
    const limit = filter.size ? parseInt(filter.size) : 10;
  
    return { page, limit };
};

exports.filterPaginationLabels = function({ docs, totalDocs, limit, page }) {
    return { data: docs, meta: { total: totalDocs, size: limit, page } };
}