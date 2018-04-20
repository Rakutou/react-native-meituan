
export function urlByAppendingQuery(url: string, params: Object) {
    if (url.substr(url.length - 1) !== '?') {
        url = url + '?'
    }

    Object.keys(params).forEach(key => {
      let value = params[key]
      result += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`  
    })

    url = url.substr(0, url.length - 1)
    return url
}
