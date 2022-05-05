const LOCAL_STORAGE_KEY = {
  TODO_LIST: 'todo-list',
}

function getLocalStorage(key) {
  try {
    const item = localStorage.getItem(key)
    const json = JSON.parse(item)
    if (!Array.isArray(json)) {
      throw new Error('해당하는 key에 일치하는 배열이 아닌 다른값이 있음')
    }
    if (item === null) {
      throw new Error('해당하는 key에 일치하는 값이 없음')
    }
    return json
  } catch (e) {
    return []
  }
}

function setLocalStorage(key, value) {
  let prevItem
  try {
    prevItem = localStorage.getItem(key)
  } catch (e) {
    return
  }
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    localStorage.setItem(key, prevItem)
  }
}

export { LOCAL_STORAGE_KEY, getLocalStorage, setLocalStorage }
