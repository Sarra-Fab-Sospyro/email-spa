import { Component, inject, OnInit } from '@angular/core';
import { TypeEmail } from '../../core/shared/enums/type-email.enum';
import { TypeService } from '../../core/shared/enums/type-service.enum';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPreliminaryDataFormGroup } from './models/ipreliminary-data-form-group';
import { IPreliminaryData } from '../../core/shared/models/ipreliminary-date';
import { EmailService } from '../services/email.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preliminary-data',
  imports: [ReactiveFormsModule],
  templateUrl: './preliminary-data.component.html',
  styleUrls: ['./preliminary-data.component.scss']
})
export class PreliminaryDataComponent implements OnInit {

  emailForm!: FormGroup<IPreliminaryDataFormGroup>;
  addedServices: TypeService[];
  emailTypes: string[];
  serviceTypes: string[];
  private _fb = inject(FormBuilder);
  private _emailService = inject(EmailService);
  private _router = inject(Router);


  constructor() {
    this.addedServices = [];
    this.emailTypes = Object.values(TypeEmail);
    this.serviceTypes = Object.values(TypeService);
  }

  ngOnInit(): void {
    this.initForm();
  }

  addService(): void {
    const selectedService = this.emailForm.get('service')?.value as TypeService;
    if (selectedService && !this.addedServices.includes(selectedService)) {
      this.addedServices.push(selectedService);
      this.emailForm.get('service')?.reset();
    }
  }

  removeService(service: TypeService): void {
    this.addedServices = this.addedServices.filter(s => s !== service);
  }

  saveAndProceed(): void {
    if (this.emailForm.valid && this.addedServices.length > 0) {
      const formData: IPreliminaryData = {
        subject: this.emailForm.value.subject,
        typeEmail: this.emailForm.value.typeEmail,
        services: this.addedServices
      };
      this._emailService.savePreliminaryData(formData);
      console.log(`dati salvati`,
        this._emailService.getPreliminaryData());
      // this._router.navigate(['']);
    }
  }

  private initForm(): void {
    this.emailForm =
      this._fb.group<IPreliminaryDataFormGroup>({
        'subject': this._fb.control(null, Validators.required),
        'typeEmail': this._fb.control(null, Validators.required),
        'service': this._fb.control(null, Validators.required),
      })
  }
}
