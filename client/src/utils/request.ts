import Taro from "@tarojs/taro";

type ResponseType = TaroGeneral.IAnyObject

export const request = (funcName: string, params: Object) => {
    return new Promise<ResponseType>((resolve, reject) => {
        Taro.cloud.callFunction({
            name: funcName,
            data: { ...params }
            }).then(res => {
                resolve(res.result as ResponseType)
            }).catch(err => {
                reject(err)
            })
    })
}

    