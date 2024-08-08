import axios from "axios";
import { REACT_APP_HOST_API } from "../../config";


export const getNotices = async () => {
    const noticeData = await axios.get(`${REACT_APP_HOST_API}/notices`);
    if (noticeData?.data?.success) {
        return noticeData?.data;
    }
}
