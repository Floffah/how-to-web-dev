import React, {FC} from "react";
import {AppProps} from "next/app";
import {DefaultSeo} from "next-seo";

const App: FC<AppProps> = (p) => {
    return (
        <>
            <DefaultSeo
                titleTemplate="%s | How To Web Dev"
                description="A full-stack web development tutorial series for beginners all the way to experts. Covers frontend and backend + other cool stuff"
                openGraph={{
                    locale: "en",
                    url: "https://webdev.floffah.dev",
                    title: "How To Web Dev",
                    description: "A full-stack web development tutorial series for beginners all the way to experts. Covers frontend and backend + other cool stuff",
                    site_name: "How To Web Dev"
                }}
            />
            <p.Component {...p.pageProps}/>
        </>
    )
}

export default App;
