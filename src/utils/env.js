// 配置开发环境和线上环境之间的切换

let baseUrl; // 接口域名
if (process.env.NODE_ENV == 'development') {
    baseUrl = ''; // 开发环境
} else {
    baseUrl = ''; // 线上环境
}

export default baseUrl;