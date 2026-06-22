function FormSuccess({ message }) {

    if (!message) return null;

    return (

        <div className="form-success">

            {message}

        </div>

    );

}

export default FormSuccess;
