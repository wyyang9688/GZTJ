import ajax from '../ajax'


function startCZ(params:any): ResponseData<{ num: number }> {
  return ajax.post('/acc/login', {
    params: {
      ...params
    }
  })
}



export default {
    startCZ
}
