//  手写axios
function Axios(config) {
    this.config = config;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager(),
    }
}
Axios.prototype.request = function (config) {
    let promise = Promise.resolve(config)
    const chains = [dispatchRequest, undefined]
    // 拦截器
    // 请求
    this.interceptors.request.handlers.forEach(item => {
        chains.unshift(item.fulfilled, item.rejected)
    })
    // 响应
    this.interceptors.response.handlers.forEach(item => {
        chains.push(item.fulfilled, item.rejected)
    })
    while (chains.length > 0) {
        promise = promise.then(chains.shift(), chains.shift())
    }
    return promise
}
function dispatchRequest(config) {
    return xhrAdapter(config).then(Response => {
        return Response
    }, error => {
        throw error
    })
}
function xhrAdapter(config) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(config.method, config.url)
        xhr.send()
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve({
                        config: config,
                        data: xhr.response,
                        Headers: xhr.getAllResponseHeaders(),
                        request: xhr,
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                } else {
                    reject(new Error('失败'))
                }
            }
        }
    })
}


let context = new Axios({})
let axios = Axios.prototype.request.bind(context)
Object.keys(context).forEach(key => {
    axios[key] = context[key]
})
function InterceptorManager() {
    this.handlers = []
}
InterceptorManager.prototype.use = function (fulfilled, rejected) {
    this.handlers.push({
        fulfilled,
        rejected
    })
}
axios.interceptors.request.use(config => {
    console.log(config)
    config.url = 'http://localhost:3001'
    return Promise.resolve(config)
}, error => {
    return Promise.reject(error)
})
axios.interceptors.request.use(config => {
    return Promise.resolve(config)
}, error => {
    return Promise.reject(error)
})
axios.interceptors.response.use(config => {
    return Promise.resolve(config)
}, error => {
    return Promise.reject(error)
})
export default axios;