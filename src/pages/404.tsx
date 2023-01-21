import React from "react"
import { Link } from "gatsby"
import { useLottie } from "lottie-react";
// @ts-ignore
import { Layout } from "../components/Layout.js"
// @ts-ignore
import errorAnimation from "../images/404.json";

const NotFoundPage = () => {
  const options = {
    animationData: errorAnimation,
    loop: true
  };

  const { View } = useLottie(options);

  return (
      <Layout>
      <main className="flex flex-1 flex-col justify-center items-center px-5.5 text-center">
        <div className="max-w-screen-sm w-full mb-10">
        {View}
        </div>
        <h1 className="sr-only">Sidan kan inte hittas</h1>
        <p className="font-serif text-xl text-primary pb-4">Åh nej! Sidan kan inte hittas.</p>
        <Link to="/" className="font-sans font-semibold text-xs uppercase tracking-wider px-8 py-2 rounded-full text-white bg-primary hover:bg-primary/70 transition-all">Tillbaka till start</Link>
      </main>
      </Layout>
  )
}

export default NotFoundPage
