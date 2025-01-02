import axios, { AxiosInstance ,AxiosRequestConfig} from 'axios'
import { ElLoading } from 'element-plus'
import { getConfig } from "@/config/config";
const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL
})
const config = getConfig();
/**
 * 请求拦截
 */
instance.interceptors.request.use((config) => {
  const { method, params } = config
  // 附带鉴权的token
  const headers: any = {
    Authorization: localStorage.getItem('token')||'authorization'
  }
  // 不缓存get请求
  if (method === 'get') {
    headers['Cache-Control'] = 'no-cache'
  }
  // delete请求参数放入body中
  if (method === 'delete') {
    headers['Content-type'] = 'application/json;'
    Object.assign(config, {
      data: params,
      params: {}
    })
  }
console.log(headers)
  return {
    ...config,
    headers
  }
})

/**
 * 响应拦截
 */
instance.interceptors.response.use((v) => {
  if (v.data?.code === 401) {
    localStorage.removeItem('token')
    // alert('即将跳转登录页。。。', '登录过期')
    // setTimeout(redirectHome, 1500)
    return v.data
  }
  if (v.status === 200) {
    return v.data
  }
  // alert(v.statusText, '网络错误')
  return Promise.reject(v)
})
export const isFullUrl = (text: string) => {
  return /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(
      text
  );
};
const typesof = (type: any): string => {
  let typeList: any = {};
  [
      "Boolean",
      "Number",
      "String",
      "Function",
      "Array",
      "Date",
      "RegExp",
      "Object",
      "Error",
      "Symbol"
  ].forEach((item) => {
      typeList[`[object ${item}]`] = item.toLowerCase();
  });
  if (type == null) {
      return type + "";
  }
  if (typeof type === "object" || typeof type === "function") {
      return typeList[toString.call(type)] || "object";
  } else {
      return typeof type;
  }
};
interface Config {
  timeout: number;
  baseUrl: string;
  isShowLoading?: boolean;
}
interface RequestConfig <T = any> {
  url: string;
  method: string;
  data?: T;
  params?: T;
  header?: any;
  baseUrl?: string;
  dataType?: string;
  responseType?: string;
  withCredentials?: boolean;
  showToast?: boolean;
  needLogin?: boolean;
}
export interface BaseDataStruct<T> {
  code: number;
  msg: string;
  massags: string;
  data: T;
  body: T;
  size: number;
}
interface SData<T> {
  data: BaseData<T>;
}
export interface BaseData<T> {
  code: number;
  msg: string;
  massags: string;
  data: T;
  body: T;
  size: number;
  messages: any[];
}
class Http {
  defaultOption: object = {
      url: "",
      method: "GET",
      header: {
          "content-type": "application/json",
          Authorization: "Authorization"
      }
  };
  timeout: number;
  baseUrl: string;
  loadUrl: string;
  axios:AxiosInstance;
  constructor(baseURL = config.baseUrl, timeout = config.mtimeout, options:any){
      this.timeout = timeout;
      this.baseUrl = baseURL;
      this.loadUrl = options.loadUrl;
      
      this.isShowLoading = options.isShowLoading;
      /** */
      this.axios = axios.create({
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json"
          // "application/x-www-form-urlencoded;charset=UTF-8;Accept-Language:zh-CN,zh;q=0.8"
        },
        responseType: "json",
        transformRequest: [
          function(data) {
            data = JSON.stringify(data);
            return data;
          }
        ]
  
        //   data: {}
      });
      // this.$sendFormData = axios.create({
      //   baseURL: baseURL,
      //   timeout: this.timeout + 1000 * 10,
      //   headers: {
      //     "X-Requested-With": "XMLHttpRequest",
      //     "Content-Type": "multipart/form-data"
      //   }
      // });
      // this.$download = axios.create({
      //   baseURL: baseURL,
      //   timeout: this.timeout,
      //   headers: {
      //     "X-Requested-With": "XMLHttpRequest",
      //     "Content-Type": "application/json"
      //     // "application/x-www-form-urlencoded;charset=UTF-8;Accept-Language:zh-CN,zh;q=0.8"
      //   },
      //   responseType: "blob",
  
      //   data: {}
      // });

      this.axios.interceptors.request.use((config) => {
        // console.log(config)
        const { method, params } = config
        // 附带鉴权的token
        const headers: any = {
          Authorization: localStorage.getItem('token')||'Authorization',
          ...config.headers
        }
        // 不缓存get请求
        if (method === 'get') {
          headers['Cache-Control'] = 'no-cache'
        }
        // // delete请求参数放入body中
        // if (method === 'delete') {
        //   headers['Content-type'] = 'application/json;'
        //   Object.assign(config, {
        //     data: params,
        //     params: {}
        //   })
        // }
      
        return {
          ...config,
          headers
        }
      })
      
      /**
       * 响应拦截
       */
      this.axios.interceptors.response.use((v) => {
        
        if (v.data?.code === 401) {
          localStorage.removeItem('token')
          // alert('即将跳转登录页。。。', '登录过期')
          // setTimeout(redirectHome, 1500)
          return v.data
        }
        if(v.data.code!==0&&v.data.msg){
          ElMessage({
            showClose: true,
            message: v.data.msg,
            type:"warning"
          })
        }
        if (v.status == 200) {
          return v.data
        }
        // alert(v.statusText, '网络错误')
        
        return Promise.reject(v)
      }, (error) => {
        console.log(error)
        ElMessage({
          showClose: true,
          message: '网络错误',
        })
        let data={
          status:error.response.status,
          code:500,
          msg:'网络错误',
          ori:error.response.data,
          error:error
        }
        // 401 未登录
        if (error.response.status == 401) {
          localStorage.removeItem('token')
          // alert('即将跳转登录页。。。', '登录过期')
          // setTimeout(redirectHome, 1500)
          return data
        }
        if (error.response.status == 403) {
          // alert('没有权限', '403')
          return data
        }
        if (error.response.status == 404) {
          // alert('没有权限', '404')
          return data
        }
        if (error.response.status == 500) {
          // alert('服务器错误', '500')
          return data
        }
        if (error.response.status == 502) {
          // alert('服务器错误', '502')
          return data
        }
      })

  }
  async http<T>(op: RequestConfig): Promise<any> {
    if (this.isShowLoading) {
        this.loadUrl = op.url;
        // uni.showLoading({
        //     title: "加载中...",
        //     mask: true
        // });
    }
    try {
        let ops = { ...op, timeout: this.timeout };
        if (ops.method == "GET") {
            ops.data = undefined;
        }
        console.log("接口调用->", { url: ops.url, data: ops.data });
        const res = (await this.axios.post('',ops)) as any;
        if (this.isShowLoading) {
            if (this.loadUrl == ops.url) {
                // setTimeout(() => {
                //     uni.hideLoading();
                // }, 5000);
            }
        }
        console.log("接口返回->", { url: ops.url, data: res.data.data });
        if (op.showToast && res.data.code != 0 && res.data.msg) {
            if (this.isShowLoading && this.loadUrl == ops.url) {
                // uni.hideLoading();
            }
            if (res.data.code == -99) {
                // reLogin();
                if (op.needLogin) {
                    // reLogin();
                    // useRouter().push({
                    //     url: "/pages/login/login"
                    // });
                    // uni.showToast({
                    //     title: "登录失效，请重新登录",
                    //     icon: "none"
                    // });
                } else {
                    // uni.showToast({
                    //     title: "该功能需要登录后才能正常使用",
                    //     icon: "none"
                    // });
                }
                console.log("需要登录");
            } else {
                console.log("msg->" + res.data.msg);
                if (res.data.msg.includes("请登录")) {
                    // reLogin();
                }
                // uni.showToast({
                //     title: res.data.msg,
                //     icon: "none",
                //     mask: true,
                //     duration: 3000
                // });
            }
        }
        return res;
    } catch (error) {
        console.log(error);
    }
}
  //  $sendFormData:AxiosInstance;
  //  $download:AxiosInstance;
  
  isShowLoading: boolean | undefined = false;
 

  async upload<T>(
      url: string,
      tempFilePath: string,
      tempFile: any,
      option?: RequestConfig
  ): Promise<T> {
      if (!isFullUrl(url)) {
          url = this.baseUrl + url;
      }
      // com.cs(url);
      // com.cs(JSON.stringify(tempFilePath));
      return new Promise((resolve, reject) => {
          // uni.uploadFile({
          //     url,
          //     header: {
          //         Authorization: uni.getStorageSync("local_token")
          //         // "Content-Type":
          //         //     "multipart/form-data; boundary=<calculated when request is sent>"
          //         // "image/"
          //     },
          //     fileType: "image",
          //     name: "file",

          //     // file: tempFile,
          //     filePath: tempFilePath,
          //     success: (resp: any) => {
          //         const _res = JSON.parse(resp.data);
          //         com.cs(JSON.stringify(_res));
          //         if (_res.code == 0) {
          //             uni.showToast({
          //                 type: "none",
          //                 title: "上传成功",
          //                 icon: "none",
          //                 duration: 1500,
          //                 success: () => {
          //                     uni.hideLoading();
          //                 }
          //             });
          //             resolve(_res);
          //         } else {
          //             uni.showToast({
          //                 type: "none",
          //                 title: _res.msg,
          //                 icon: "none",
          //                 duration: 1500,
          //                 success: () => {
          //                     // uni.hideLoading();
          //                 }
          //             });
          //             if (_res.code == -99) {
          //                 reLogin();
          //             }
          //             resolve(_res);
          //         }
          //     },
          //     fail: function (err: any) {
          //         com.cs(JSON.stringify(err));
          //         uni.showToast({
          //             type: "none",
          //             title: "上传失败，请重试",
          //             icon: "none",
          //             duration: 1500,
          //             success: () => {
          //                 uni.hideLoading();
          //             }
          //         });
          //         reject(err);
          //     }
          // });
      });
  }
  param(data: { [key: string]: any } | undefined, url: string): string {
      if (!data) {
          return url;
      }
      let ret = "";
      for (const key in data) {
          if (typesof(data[key]) == "array") {
              for (let v of data[key]) {
                  if (ret) ret += "&";
                  ret += key + "=" + v;
              }
          } else if (typesof(data[key]) == "object") {
              if (ret) ret += "&";
              ret += key + "=" + "object";
          } else {
              if (ret) ret += "&";

              ret += key + "=" + data[key];
          }
      }
      url.indexOf("?") > 0
          ? (url = url + "&" + ret)
          : (url = url + "?" + ret);
      return url;
  }
  get<T>(
      url: string,
      data?: object,
      option?: Partial<RequestConfig> // Optional<Omit<RequestConfig, "data">>
  ) {
      url = this.param(data, url);
      if (!isFullUrl(url)) {
        url = this.baseUrl + url;
    }
      return this.axios.get<any,T>(
          url
      );
  }
  post<T>(
      url: string,
      data?: object,
      params?: object,
      option?: Partial<RequestConfig>
  ) {
      url = this.param(params, url);
      if (!isFullUrl(url)) {
        url = this.baseUrl + url;
    }
      return this.axios.post<any,T>(
          
          url,
          data
      );
  }

  put<T>(
      url: string,
      data?: object,
      params?: object,
      option?: RequestConfig
  ) {
      url = this.param(params, url);

      return this.request<T>({
          ...option,
          url,
          data,
          method: "PUT"
      });
  }

  private request<T>(option: RequestConfig): Promise<SData<T>> {
      // const token = "";
      option = Object.assign(this.defaultOption, option);
      option.header.Authorization = option.header.Authorization ?? "token";
      // delete option.header._Authorization;
      if (!isFullUrl(option.url)) {
          option.url = this.baseUrl + option.url;
      }

      return this.http<BaseData<T>>({ ...option });
     
  }
}
console.log(config)
const http=new Http(config.VITE_APP_BASE_URL, config.VITE_APP_MTime, {});

export default http
