import { ExpoConfig, ConfigContext } from 'expo/config'

import pkg from './package.json'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: pkg.name.split('-').pop() ?? pkg.name,
  slug: pkg.name,
  version: pkg.version,
  orientation: 'portrait',
  scheme: pkg.name.split('-').pop(),
  icon: './assets/icon-light.png',
  userInterfaceStyle: 'automatic',
  updates: { fallbackToCacheTimeout: 0 },
  newArchEnabled: true,
  assetBundlePatterns: ['**/*'],
  ios: {
    bundleIdentifier: `com.tiesen.${pkg.name.split('-').pop()}`,
    supportsTablet: true,
    icon: {
      light: './assets/icon-light.png',
      dark: './assets/icon-dark.png',
    },
  },
  android: {
    package: `com.tiesen.${pkg.name.split('-').pop()}`,
    adaptiveIcon: {
      foregroundImage: './assets/icon-light.png',
      backgroundColor: '#14185a',
    },
    edgeToEdgeEnabled: true,
  },
  experiments: {
    tsconfigPaths: true,
  },
  plugins: [
    [
      'expo-splash-screen',
      {
        backgroundColor: '#ffffff',
        image: './assets/icon-light.png',
        dark: {
          backgroundColor: '#000000',
          image: './assets/icon-dark.png',
        },
      },
    ],
  ],
})
