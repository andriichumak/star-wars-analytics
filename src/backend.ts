import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";
import { withCaching, RecommendedCachingConfiguration } from "@gooddata/sdk-backend-base";
import backendFactory, { ContextDeferredAuthProvider } from "@gooddata/sdk-backend-tiger";

export const backend: IAnalyticalBackend = withCaching(
    backendFactory()
        .onHostname("https://public-examples.gooddata.com")
        .withAuthentication(new ContextDeferredAuthProvider()),
    RecommendedCachingConfiguration,
);
