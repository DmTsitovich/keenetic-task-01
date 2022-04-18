import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
	public  list = [
    { ip: '192.168.22.1', name: 'zzz' },
    { ip: '5.220.100.50', name: 'quuz' },
    { ip: '5.24.69.2', name: 'foo' },
    { ip: '5.24.69.2', name: 'foo' },
    { ip: '5.220.100.50', name: 'bar' },
    { ip: '192.168.22.1', name: 'foo' },
    { ip: '5.220.100.50', name: 'baz' },
    { ip: '5.220.100.50', name: 'foo' },
    { ip: '192.168.22.1', name: 'aaa' },
    ];

    ngOnInit(): void {
    }

    public sorting() {
     this.list.sort((a, b) => {
       if (a.ip > b.ip) {
         return 1
       } else if ((a.ip === b.ip) && (a.name < b.name)) {
         return 1
       } else {
         return -1
       }
      })
      return this.list 
    }
}