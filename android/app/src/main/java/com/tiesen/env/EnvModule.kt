package com.tiesen.env

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import java.util.Properties

class EnvModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "EnvModule"
    }

    override fun getConstants(): Map<String, Any>? {
        val constants = HashMap<String, Any>()
        try {
            val properties = Properties()
            // Ensure you have an .env file inside android/app/src/main/assets/
            val inputStream = reactApplicationContext.assets.open(".env")
            properties.load(inputStream)
            
            for (key in properties.stringPropertyNames()) {
                constants[key] = properties.getProperty(key) ?: ""
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
        return constants
    }
}
