import instance from "@/utils/request"

export const getcategorydata = () => {
    return instance.get('/category/list')
}