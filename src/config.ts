// typescript globals
declare var __BUILD_COMMIT: string
declare var __BUILD_VERSION: string
declare var __BUILD_BRANCH: string
declare var __BUILD_DATE: string

const APP_TITLE = process.env.APP_TITLE || '<- title ->'
const SERVICE_URL = process.env.SERVICE_URL!
const GRAPHQL_URL = `${process.env.SERVICE_URL}/graphql`

export default {
  SERVICE_URL,
  GRAPHQL_URL,
  APP_TITLE,
  BUILD_COMMIT: __BUILD_COMMIT,
  BUILD_VERSION: __BUILD_VERSION,
  BUILD_BRANCH: __BUILD_BRANCH,
  BUILD_DATE: __BUILD_DATE
}
