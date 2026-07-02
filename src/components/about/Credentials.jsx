import SectionHeader from "../common/SectionHeader";
import credentialsData from "../../data/about/credentialsData";

import CredentialGroup from "./CredentialGroup";

import "../../styles/about/credentials.css";

function Credentials() {
  return (
    <section
      className="credentials section"
      id={credentialsData.sectionId}
    >
      <div className="container">

        {/* ======================================
            SECTION HEADER
        ======================================= */}
        <SectionHeader
          eyebrow={credentialsData.eyebrow}
          title={credentialsData.title}
          description={credentialsData.intro}
        />

        {/* ======================================
            CREDENTIAL GROUPS
        ======================================= */}
        <div className="credentials-layout">

          <CredentialGroup
            title="Education"
            items={credentialsData.education}
          />

          <CredentialGroup
            title="Certifications & Professional Development"
            items={credentialsData.certifications}
          />

        </div>
      </div>
    </section>
  );
}

export default Credentials;