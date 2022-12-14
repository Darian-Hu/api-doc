// 本地访问路径
var localPath = "/gsn-interface";
if (window.document.location.href.indexOf("locallhost") != -1) {
  localPath = "";
}
// api接口
export const apis={
  isOpenApiDoc:"/apidoc/isOpenApiDoc",
  info:"/apidoc/info",
  modules:"/apidoc/modules",
  actions:"/apidoc/actions",
  detail:"/apidoc/detail",
  updateInfo: "/apidoc/updateInfo",
  updateAction: "/apidoc/updateAction",
  updateActionDescription: "/apidoc/updateActionDescription",
  updateDetail: "/apidoc/updateDetail",
  updateModulesSort: "/apidoc/updateModulesSort",
  updateActionsSort: "/apidoc/updateActionsSort",
  addParam:"/apidoc/addParam",
  updateParam:"/apidoc/updateParam",
  deleteParam:"/apidoc/deleteParam",
};
