import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
  schemaFile: 'https://petstore3.swagger.io/api/v3/openapi.json',
  //schemaFile: process.env.SCHEMA_FILE as string,
  apiFile: './provider/store/emptyApi.ts',
  apiImport: 'emptySplitApi',
  outputFile: './provider/store/BudhiApi.ts',
  exportName: 'BudhiApi',
  hooks: true,
}

export default config
