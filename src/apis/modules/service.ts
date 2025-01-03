import ajax from '../ajax'


function startCZ(params:any): ResponseData<{ num: number }> {
  return ajax.post('/acc/login', {
    params: {
      ...params
    }
  })
}
function getPrd(params:any): ResponseData<any> {
  return ajax.get('/miaobi/creationcard?type=once', {
    params: {
      ...params
    }
  })
}

const service={
    getPayUrl(params:any): ResponseData<{
        orderId:string;
        qrcode:string
    }>{
        return ajax.post('/miaobi/creationcard/buy', {
            
              ...params
          })
    },
    queryOrderById(orderId :string): ResponseData<any>{
        return ajax.get('/miaobi/creationcard/order', {
              id:orderId
          })
    },
    generationGZTJ(params:any): ResponseData<any>{
        return ajax.post('/miaobi/creation/reading/generation', {
            ...params
        })
    },
    sendInvoice(params:any): ResponseData<any>{
        return ajax.post('/api/email/invoice/save', {
            ...params
        })
    },
}



export default {
    startCZ,
    getPrd,
    ...service
}
