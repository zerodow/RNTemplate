/**
 * @format
 */

import { AppRegistry } from "react-native"
import App from "./App"
import { name as appName } from "./app.json"

if (__DEV__) {
  require("./src/devtools/ReactotronConfig")
} else {
  require("./src/devtools/NetworkLog")
}

AppRegistry.registerComponent(appName, () => App)
