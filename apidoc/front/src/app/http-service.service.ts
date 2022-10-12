import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

/** 定义全局接口，封装http服务,封装angular原生HttpClient类 */
@Injectable()
export class HttpService {

  /** 注入httpClient */
  constructor(private httpClient: HttpClient) {
  }

  /** get请求 */
  public get(url: string): Observable<Object> {
    return this.httpClient.get(url);
  }

  /** post请求 */
  public post(url: string, body: any | null): Observable<Object> {
    return this.httpClient.post(url, body);
  }

  /** put请求 */
  public put(url: string, body: any | null): Observable<Object> {
    return this.httpClient.put(url, body);
  }

  /** delete请求 */
  public delete(url: string): Observable<Object> {
    return this.httpClient.delete(url);
  }

  /** 文件上传 */
  upload(url: string, $event, fileKey: string, ...obj: any[]): Observable<Object> {
    const files = $event.target.files || $event.srcElement.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(fileKey, files[i]);
    }
    if (obj) {
      for (let i = 0; i < obj.length; i++) {
        console.log(JSON.stringify(obj[i]));
      }
    }
    return this.httpClient.post(url, formData);
  }
}
