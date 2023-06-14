const get = (key) => {
  const data = localStorage.getItem(key)

  if (typeof data !== "string") return data

  try {
    return JSON.parse(data)
  } catch {
    return data
  }
}

const set = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export const StorageService = { get, set }