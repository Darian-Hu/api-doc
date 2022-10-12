/** 定义网站url根路由 */
export const ROOT_URL = getUrl();


/** 获取查询参数，用以区别不同的文档 */
export const URL_PARAM = getUrlParam();

/** 获取网站url根路径 */
function getUrl() {
  return window.location.protocol + "//" + window.location.host;
}

/** 获取查询参数 */
function getUrlParam() {
  // 获取查询参数
  let search = window.location.search;
  return search;
}
