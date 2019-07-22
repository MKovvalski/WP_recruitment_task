export const logError = errorMsg => console.log(errorMsg)

export const executeMethod = method => typeof method === 'function' && method()