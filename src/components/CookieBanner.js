import React from "react";
import CookieConsent, {Cookies} from "react-cookie-consent";
import { useLocation } from "@reach/router";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";
import { Link } from "gatsby";

const CookieBanner = ({}) => {
  const location = useLocation();

  return (
    <CookieConsent
      buttonText="Godkänn"
      declineButtonText="Neka"
      enableDeclineButton={true}
      cookieName="gatsby-gdpr-google-tagmanager"
      onAccept={() => {
        Cookies.set("gatsby-gdpr-google-tagmanager", "true");
        Cookies.set("gatsby-gdpr-google-analytics", "true");
        Cookies.set("gatsby-gdpr-facebook-pixel", "true");
        initializeAndTrack(location);
      }}
      disableStyles={true}
      containerClasses="fixed z-50 right-6 w-full max-w-xs mb-6 bg-secondary rounded-md p-6 border border-white"
      buttonClasses="flex-1 px-8 py-2 rounded-lg text-sm leadning-none bg-primary text-white hover:bg-primary/70"
      declineButtonClasses="flex-1 px-8 py-2 rounded-lg text-sm leadning-none bg-white hover:bg-white/70"
      buttonWrapperClasses="flex pt-6 gap-4"
    >
      <h2 className="font-sans font-bold text-lg text-primary pb-3">Sidan använder cookies</h2>
      <p className="text-sm text-neutral-600">Hej, denna webbplats använder cookies för att säkerställa att den fungerar korrekt och spårningscookies för att förstå hur du interagerar med den. <Link to="/cookies" className="font-bold text-neutral-800 underline underline-offset-2 hover:no-underline">Läs vår cookiepolicy här.</Link></p>
    </CookieConsent>
  );
};

export default CookieBanner;
