import React from "react";

function debounce(func: any, timeout = 300) {
    let timer: NodeJS.Timeout;

    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(undefined, args); }, timeout);
    };
}

export const PageWidthContext = React.createContext<number>(0);
export const PageWidthProvider: React.FC = ({ children }) => {
    const [width, setWidth] = React.useState<number>(window.innerWidth);

    React.useEffect(() => {
        const listener = debounce(() => {
            setWidth(window.innerWidth);
        });

        window.addEventListener("resize", listener);

        return () => window.removeEventListener("resize", listener);
    });

    return <PageWidthContext.Provider value={width}>
        {children}
    </PageWidthContext.Provider>;
};
export const usePageWidth = () => React.useContext(PageWidthContext);
