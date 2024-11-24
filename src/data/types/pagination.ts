export interface IPaginationMetaData {
    "limit"?: number,
    "size"?: number,
    "page"?: number,
    "total"?: number,
    "current_page"?: number,
    "has_next"?: boolean,
    "has_prev"?: boolean,
    "total_page"?: number,
}

export interface IPaginationFilter {
    limit?: number,
    page?: number,
    search?: string,
    searchBy?: string,
    orderBy?: string,
    order?: "ASC" | "DESC",
    size?: number
}