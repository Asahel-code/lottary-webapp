import swal from "sweetalert";
import GamblingSerives from "../utils/services/GamblingServices"
import { useUserStore } from "../utils/zustand/Store"
import { getError } from "../utils/getError";


// eslint-disable-next-line react/prop-types
const RaffleButton = ({ code }) => {

    const user = useUserStore((state) => state.user);

    const sendCode = async(code) => {
        const data = {
            phone: user.phone,
            code: code
        }
        await GamblingSerives.sendYourCode(data).then((response) => {
            swal("Success", response.message, "success");
        })
        .catch((error) => {
            swal("Error!", getError(error), "error");
        })
    }
    return (
        <div className="flex items-center space-x-3 rounded-lg bg-indigo-500 px-6 py-5 cursor-pointer hover:shadow-3xl" onClick={() => sendCode(code)}>
            
        </div>
    )
}

export default RaffleButton