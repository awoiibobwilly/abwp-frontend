import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import SocialPlatforms from "../components/contact/SocialPlatforms";
import AvailabilityCollaboration from "../components/contact/AvailabilityCollaboration";
import FAQSection from "../components/contact/FAQSection";

import UniversalCTA from "../components/common/UniversalCTA/UniversalCTA";

function Contact() {

  return (
    <>
      <ContactHero />

      <ContactInfo />

      <ContactForm />

      <SocialPlatforms />

      <AvailabilityCollaboration />

      <FAQSection />

      <UniversalCTA

          page="contact"

      />

    </>
  );

}

export default Contact;