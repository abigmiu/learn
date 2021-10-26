import createRouteMap  from "./create-route-map";
import createRoute from "./create-route";

export default function createMatcher(router) {
    const { pathList, pathMap } = createRouteMap(router)

    function match(path) {
        const record = pathMap[path]

        if (record) {
            return createRoute(record, path)
        }
        return createRoute(null, path)
    }

    function addRoutes(router) {
        createRouteMap(router, pathList, pathMap)
    }

    return {
        match,
        addRoutes
    }
}
