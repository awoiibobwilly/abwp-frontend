import ToolTemplateCard from "./ToolTemplateCard";

import {
  templatesData,
} from "../../data/knowledgeHub/templatesData";

import "../../styles/knowledgeHub/toolsTemplates.css";

function ToolsTemplates() {

  return (

    <section className="tools-templates section">

      <div className="container">

        <div className="tools-templates-header">

          <span className="tools-templates-badge">

            Tools & Templates

          </span>


          <h2 className="section-title">

            Ready-to-Use Resources

          </h2>


          <p className="section-subtitle">

            Download practical tools, templates,
            scripts, dashboards, and frameworks
            supporting research, healthcare,
            leadership, and technology.

          </p>

        </div>


        <div className="tools-templates-grid">

          {templatesData.map(

            (item, index) => (

              <ToolTemplateCard
                key={index}
                item={item}
              />

            )

          )}

        </div>

      </div>

    </section>

  );

}

export default ToolsTemplates;