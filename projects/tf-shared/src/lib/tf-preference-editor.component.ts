import {
  Component,
  computed,
  effect,
  input,
  model,
  output,
  signal,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonEditorOptions, NgJsoneditorComponent } from '@livx/ng-jsoneditor';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'tf-preference-editor',
  imports: [
    NgJsoneditorComponent,
    NzSelectModule,
    FormsModule,
    NzButtonModule,
    NzMessageModule,
  ],
  templateUrl: './tf-preference-editor.component.html',
  styles: ``,
})
export class TfPreferenceEditorComponent {
  private validateErrors: any[] = [];
  public editorOptions: JsonEditorOptions = {
    ...new JsonEditorOptions(),
    modes: ['code', 'text', 'tree', 'view'],
    mode: 'code',
    mainMenuBar: true,
    statusBar: false,
    navigationBar: false,
    // expandAll: true,
    onValidationError: (error: any) => {
      this.validateErrors = error;
    },
  };

  public onSelectedChange = output<string>();
  public onSave = output<any>();

  public errorMessage = input('Json格式不正确，请检查后在重新提交');
  public buttonText = input('保存配置');

  @ViewChild(NgJsoneditorComponent, { static: false })
  editor: NgJsoneditorComponent;

  json = input('');
  dropdownOptions = input<{ value: string; key: string }[]>([]);

  selectedValue = input('');

  selectedPreference = '';

  data = computed(() => {
    if (typeof this.json() === 'string') {
      return JSON.parse(this.json());
    } else if (typeof this.json() === 'object') {
      return this.json();
    }
    return {};
  });

  constructor(private message: NzMessageService) {
    effect(() => {
      this.selectedPreference = this.selectedValue();
    });
  }

  onKeyChange(event: any) {
    this.onSelectedChange.emit(this.selectedPreference);
  }

  onSaveClicked() {
    if (this.validateErrors.length > 0) {
      this.message.error(this.errorMessage());
    } else {
      this.onSave.emit(JSON.parse(this.editor.getText()||"{}"));
    }
  }
}
