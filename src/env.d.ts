interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_APP_AXIOS_BASE_URL: string;
}
declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "uview-plus";
declare module "uqrcodejs";

import { ElementPlus } from 'element-plus'
 
declare module 'vue' {
  export interface GlobalComponents {
    [ElementPlus as symbol]: typeof ElementPlus
  }
}