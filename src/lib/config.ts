export const config = {
    get POOL_SERVICE_API_URL() {
        return typeof window !== "undefined"
            ? (window.__CONFIG__?.POOL_SERVICE_API_URL ?? "")
            : (process.env.POOL_SERVICE_API_URL ?? "");
    },
};
