/// <reference types="uniwind/types" />

import 'react-native'

declare module 'react-native' {
  interface NativeModulesStatic {
    EnvModule: {
      API_URL: string
    }
  }
}
