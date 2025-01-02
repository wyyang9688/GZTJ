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



export default {
    startCZ,
    getPrd
}
