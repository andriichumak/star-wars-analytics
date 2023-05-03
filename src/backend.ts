import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";
import { withCaching, RecommendedCachingConfiguration } from "@gooddata/sdk-backend-base";
import backendFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-tiger";

export const backend: IAnalyticalBackend = withCaching(
    backendFactory(undefined, {
        packageName: "STAR_WARS_ANALYTICS",
        packageVersion: "1.0.0",
    })
        .onHostname("https://public-examples.gooddata.com")
        .withAuthentication(new ContextDeferredAuthProvider()),
    RecommendedCachingConfiguration,
);
