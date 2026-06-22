import { FaCircleCheck } from "react-icons/fa6";

function FormSuccess({ message }) {

    if (!message) return null;

    return (

        <div className="form-success">

            <FaCircleCheck />

            <span>

                {message}

            </span>

        </div>

    );

}

export default FormSuccess;