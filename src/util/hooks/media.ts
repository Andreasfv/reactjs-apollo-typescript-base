//STOLEN FROM UR SOLUTIONS : SORRY :)))

import { useCallback, useEffect, useState } from "react";

const constructMediaQueries = (breakpoints: number[], onlyScreen: boolean) => {
    return breakpoints.reduce(
        (queries: string[], breakpoint: number, index: number) => {
            queries.push(`
    ${onlyScreen ? "only screen and " : ""}
    ${
        !index
            ? "(min-width: 0px) and "
            : `(min-width: ${breakpoints[index - 1]}) and `
    }
    (max-width: ${breakpoint - 1}px)
    `);
            if (index === breakpoints.length - 1)
                queries.push(`
        ${onlyScreen ? "only screen and " : ""}
        (min-width: ${breakpoint}px)
    `);
            return queries.map((q: string) =>
                q.replace(/[\s]{2,}/g, " ").trim()
            );
        },
        []
    );
};

const getMediaMatches = (queries: any[]) =>
    queries
        .map((mqr: string) => window.matchMedia(mqr))
        .map((m: { matches: any }) => m.matches);

const DEFAULT_MEDIA_BREAKPOINTS = [768];

export default function useMedia(
    breakpoints = DEFAULT_MEDIA_BREAKPOINTS,
    onlyScreen = true
) {
    const mediaQueries = constructMediaQueries(breakpoints, onlyScreen);

    const [matches, setMatches] = useState(getMediaMatches(mediaQueries));

    const resizeHandler = useCallback(
        () => setMatches(getMediaMatches(mediaQueries)),
        [mediaQueries]
    );
    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, [resizeHandler]);

    return matches;
}
