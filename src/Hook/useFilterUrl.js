export const useFilterUrl = async (arr) => {
    return await arr.map((item)=>{
        return item.url
    })
}
