import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";

export class Table {
    public id: number;
    public name: string;
}

@Injectable()
export class TableService {
    private baseUrl: string = 'http://platform.report.me.yy.com/sys/manage/table/';

    constructor(private http: Http) {

    }

    public listAllTable(): Observable<Table[]> {
        console.log("listalltable");
        return this.http.get(this.baseUrl + 'listTables.do', {withCredentials: true})
            .map((resp: Response) => {
                    return <any[]>resp.json();
                }
            );
    }

    public saveTable(table: Table): Observable<Table> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.baseUrl + "saveTable.do", JSON.stringify(table), options)
            .map((resp: Response)=> {
                return <Table>resp.json();
            });
    }

    public getTableMenuByTable(table: any): any {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.baseUrl + "getMenuTable.do", JSON.stringify(table), options)
            .map((resp: Response)=> {
                return <Table>resp.json();
            });

    }

    saveTableMenus(selectedTable: any, menuIds: (number)[]) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});
        let data = {
            tableId: selectedTable.id,
            menuIds: menuIds
        };

        return this.http.post(this.baseUrl + "updateTableMenus.do", JSON.stringify(data), options);

    }

    updateTable(table: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.baseUrl + "updateTable.do", JSON.stringify(table), options)
            .map((resp: Response) => {
                return <Table>resp.json();
            });
    }

    deleteTable(table: any) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers, withCredentials: true});

        return this.http.post(this.baseUrl + "deleteTable.do", JSON.stringify(table), options);


    }
}
