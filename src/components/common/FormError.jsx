import { FaCircleExclamation } from "react-icons/fa6";

function FormError({ message }) {

    if (!message) return null;

    return (

        <div className="form-error">

            <FaCircleExclamation />

            <span>

                {message}

            </span>

        </div>

    );

}

export default FormError;