
// config something
export const AXIOSURL = "https://lianghj.top:8888/api/private/v1"

export const AXIOSTIMEOUT = 5000

export const getAxiosUrl = () => localStorage.getItem("IMAxiosUrl")?localStorage.getItem("IMAxiosUrl")!:AXIOSURL
