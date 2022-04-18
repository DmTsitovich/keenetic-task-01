import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { resp, Route } from "./table-02.interface";

@Injectable({
  providedIn: 'root'
})

export class TableDataHttpService {
    constructor(private http: HttpClient) {
  }
  public create(option: Route): Observable<resp>{
    return this.http.post<resp>(`http://localhost:3333/api/routes`, option)
  }

  public getList():Observable<resp> {
      return this.http.get<resp>(`http://localhost:3333/api/routes`)
  }
  public get(uuid: string):Observable<resp> {
      return this.http.get<resp>(`http://localhost:3333/api/routes/${uuid}`)
  }

  public modified(uuid: string, option?: Partial<Route>):Observable<resp> {
      return this.http.put<resp>(`http://localhost:3333/api/routes/${uuid}`, option)
  }

  public delete(uuid: string):Observable<resp> {
      return this.http.delete<resp>(`http://localhost:3333/api/routes/${uuid}`)
  }

  public getRouteForIP(ip: string, mostSpecific?: boolean):Observable<resp> {
      return this.http.get<resp>(`http://localhost:3333/api/route/for-ip/${ip}`)
  }
}