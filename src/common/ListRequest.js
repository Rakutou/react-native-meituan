import { urlByAppendingQuery } from "./tool"


const PageKey = 'page'
const PageSize = 20
const PageSizeKey = 'count'
const DefaultListNode = 'list'
const Host = ''

export default class ListRequest {
    path: string
    isReload: boolean
    isFirstLoad: boolean
    currentPage: number
    noMoreData: boolean
    dataList: Array<Object>
    onSuccess: function
    onFailure: function

    constructor(path: string) {
        this.path = path
        this.isFirstLoad = true
        this.dataList = []
        this.isReload = true
        this.currentPage = 1
        this.noMoreData = false
    }

    requestFirstPage(params: Object) {
        this.isReload = true
        this.startRequest(params, 1)
    }

    requestNextPage(params: Object) {
        this.isReload = false
        this.startRequest(params, this.currentPage + 1)
    }

    startRequest(params: Object, page: number) {
        let requestParams = { ...params }
        requestParams[PageKey] = page
        requestParams[PageSizeKey] = PageSize

        let url = urlByAppendingQuery(Host + this.path, requestParams)

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                if (this.isReload) {
                    this.dataList = json.items
                } else {
                    this.dataList.push(...json.items)
                }
                this.currentPage = page
                this.noMoreData = json.items.count < PageSize

                this.onSuccess && this.onSuccess()

                console.log(`ListRequest - Success node:${this.path}`)

            }).catch((error) => {
                this.onFailure && this.onFailure()
                console.log(`ListRequest - Error node:${this.path} error:${error}`)
            })
    }
}



















