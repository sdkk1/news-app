import Constants from 'expo-constants'

export const newsURL = `https://newsapi.org/v2/top-headlines?country=jp&category=technology&apiKey=${Constants.manifest?.extra?.newsApiKey}`
