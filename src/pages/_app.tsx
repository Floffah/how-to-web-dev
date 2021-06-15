import React, { FC } from "react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { ApplyGlobalStyles } from "../lib/themes/styles";
import { Provider, useAtom } from "jotai";
import { themeAtom } from "../lib/state/theme";

const App: FC<AppProps> = (p) => {
    const [theme] = useAtom(themeAtom);

    return (
        <>
            <DefaultSeo
                titleTemplate="%s | How To Web Dev"
                description="A full-stack web development tutorial series for beginners all the way to experts. Covers frontend and backend + other cool stuff"
                openGraph={{
                    locale: "en",
                    url: "https://webdev.floffah.dev",
                    title: "How To Web Dev",
                    description:
                        "A full-stack web development tutorial series for beginners all the way to experts. Covers frontend and backend + other cool stuff",
                    site_name: "How To Web Dev",
                }}
            />
            <Provider>
                <ApplyGlobalStyles theme={theme}>
                    <p.Component {...p.pageProps} />
                </ApplyGlobalStyles>
            </Provider>
        </>
    );
};

export default App;
