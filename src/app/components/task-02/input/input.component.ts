import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'frm-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string = '';
  @Input() type: 'text'|'password'|'number' = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() maxLength: number = 524288;
  @Input() clearable: boolean = true;
  @Input() hasSearchIcon: boolean = false;
  @Input() mask: string;
  @Input() validation: boolean = true;
  @Input() prefix: string = '';
  @Input() specialCharacters: string[] = ['-', '/', '(', ')', '.', ':', ' ', '+' , ',', '@', '[', ']', '"', '\''];
  @Input() dropSpecialCharacters: boolean = true;
  @Input() floatLabel: 'auto' | 'always' | 'never' = 'auto';

  @Output() cleared: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public get showError(): boolean {
    return this.control.invalid && this.control.touched;
  }

  public clear(): void {
    this.control.setValue('');
    this.cleared.emit();
  }
}
