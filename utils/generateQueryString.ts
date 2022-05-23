type QueryParams = {
  [key: string]: any;
};

const generateQueryString = (queryParams: QueryParams) => {
  return queryParams
    ? Object.entries(queryParams).reduce((queryString, [key, value]) => {
        const separator = queryString.length === 0 ? "?" : "&";
        queryString += value ? `${separator}${key}=${value}` : "";
        return queryString;
      }, "")
    : "";
};

export default generateQueryString;
