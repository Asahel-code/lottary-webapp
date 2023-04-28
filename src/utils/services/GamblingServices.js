import AxiosUtility from "./AxiosServices";

const fetchGameList = async () => {
    const res = await AxiosUtility.get('/game/list');

    return res.data;
}

const sendYourCode = async (data) => {
    const res = await AxiosUtility.post('/game/gamble', data);

    return res.data;
}

const GamblingSerives = {
    fetchGameList,
    sendYourCode
}

export default GamblingSerives;