import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TableSecondComponent } from "./table-second.component";

describe('ProfileModalInfoComponent', () => {
  let component: TableSecondComponent;
  let fixture: ComponentFixture<TableSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
