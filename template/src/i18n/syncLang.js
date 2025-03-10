const fs = require("fs")
const path = require("path")

const languages = ["vi"] // Add any other languages here
const enFilePath = path.join(__dirname, "en/en.json")

const syncLanguageFiles = (lang) => {
  const langFilePath = path.join(__dirname, `${lang}/${lang}.json`)

  if (!fs.existsSync(langFilePath)) {
    console.log(`File not found: ${langFilePath}`)
    return
  }

  const enContent = JSON.parse(fs.readFileSync(enFilePath, "utf-8"))
  const langContent = JSON.parse(fs.readFileSync(langFilePath, "utf-8"))

  const mergedContent = mergeJson(enContent, langContent)

  fs.writeFileSync(langFilePath, JSON.stringify(mergedContent, null, 2), "utf-8")
  console.log(`File updated: ${langFilePath}`)
}

const mergeJson = (source, target) => {
  const result = {}

  for (const key in source) {
    if (typeof source[key] === "object" && !Array.isArray(source[key])) {
      result[key] = mergeJson(source[key], target[key] || {})
    } else {
      if (target.hasOwnProperty(key)) {
        result[key] = target[key]
      } else {
        result[key] = source[key]
      }
    }
  }

  return result
}

languages.forEach((lang) => syncLanguageFiles(lang))
