import "../../styles/insights/editorialDivider.css";

// ==========================================================
// EDITORIAL DIVIDER
// ==========================================================

function EditorialDivider({

  label = "Continue Reading",

}) {

  return (

    <div className="editorial-divider">

      <span>
        {label}
      </span>

    </div>

  );

}

export default EditorialDivider;