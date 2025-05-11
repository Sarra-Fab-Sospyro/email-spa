import { Injectable } from '@angular/core';
import { IPreliminaryData } from '../../core/shared/models/ipreliminary-date';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private preliminaryData!: IPreliminaryData;

  savePreliminaryData(data: IPreliminaryData): void {
    this.preliminaryData = data;
  }

  getPreliminaryData(): IPreliminaryData {
    return this.preliminaryData;
  }
}
