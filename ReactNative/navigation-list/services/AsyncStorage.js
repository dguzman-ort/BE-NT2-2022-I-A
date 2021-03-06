import AsyncStorage from '@react-native-async-storage/async-storage';

const isObject = (value) => typeof value === 'object'


const storeData = async (key, value) => {
    try {

        if (isObject(value)){
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(key, jsonValue)
        }else {
            await AsyncStorage.setItem(key, value)
        }        
    } catch (e) {
        // saving error
    }
}

const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}

const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  }

export {
    storeData,
    getData,
    clearAll
}