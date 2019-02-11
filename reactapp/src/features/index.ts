
export type AppState = {
}

const initFeatures: any[] = [
]
export default function init(initFeatureFunctions = initFeatures) {
    const config = {
        reducers: {}
    }
    for (const initFeature of initFeatureFunctions) {
        initFeature(config)
    }
    return config;
}