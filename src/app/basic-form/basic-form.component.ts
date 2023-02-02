import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  UntypedFormArray,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css'],
})
export class BasicFormComponent implements OnInit {
  basicForm: UntypedFormGroup;
  rulesList = [
    {
      ruleName: 'Show n Tell Rule',
      ruleCode: 15,
      description: 'Compare with TR',
      ruleDetails:
        '(([INPUT] <= [TR_B_<Currency From>_<Currency To> * 0.998]))',
      createdDate: '2023-01-30T03:22:48.6238112',
      approveBy: 'salehuddin.loke',
      editedBy: null,
      requisitionStatus: 3,
      requisitionStatusDescription: 'Completed',
    },
    {
      ruleName: 'show n tell 2',
      ruleCode: 16,
      description: 'Compare with WACC',
      ruleDetails: '(([INPUT] <= [WACC]) && ([INPUT] <=[HIGHESTCOST]))',
      createdDate: '2023-01-30T03:22:48.6238112',
      approveBy: 'salehuddin.loke',
      editedBy: null,
      requisitionStatus: 3,
      requisitionStatusDescription: 'Completed',
    },
    {
      ruleName: 'TestC',
      ruleCode: 8,
      description: 'Compare with TR',
      ruleDetails:
        '(([INPUT] <= [TR_B_<Currency From>_<Currency To> * 0.998]))',
      createdDate: '2023-01-26T07:18:28.9374721',
      approveBy: 'fadhli.ismail',
      editedBy: null,
      requisitionStatus: 3,
      requisitionStatusDescription: 'Completed',
    },
    {
      ruleName: 'TestB',
      ruleCode: 6,
      description: 'Compare with WACC',
      ruleDetails: '(([INPUT] <= [WACC]) && ([INPUT] <=[HIGHESTCOST]))',
      createdDate: '2023-01-26T06:49:17.2457523',
      approveBy: 'fadhli.ismail',
      editedBy: null,
      requisitionStatus: 3,
      requisitionStatusDescription: 'Completed',
    },
  ];
  constructor(
    /**
     * - in order to use FormBuilder, need to import the ReactiveFormsModule & FormsModule
     */
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // create and init the form
    this.initForm();
  }

  initForm() {
    this.basicForm = this.fb.group({
      name: [''],
      age: 0,
      ruleList: [[], Validators.required],
      selectedRules: [],
    });
  }

  onAddRule(ruleValue: Event) {
    const selectedRules = this.basicForm.controls
      .selectedRules as UntypedFormArray;
    const selectedRuleFormGroup = this.fb.group({
      // ruleCode: ruleValue,
    });
    console.log('ruleList', ruleValue, selectedRules);
    // selectedRules.push(ruleValue)
  }
}
