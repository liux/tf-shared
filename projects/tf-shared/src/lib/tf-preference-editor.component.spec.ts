import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TfPreferenceEditorComponent } from './tf-preference-editor.component';

describe('TfPreferenceEditorComponent', () => {
  let component: TfPreferenceEditorComponent;
  let fixture: ComponentFixture<TfPreferenceEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TfPreferenceEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TfPreferenceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
