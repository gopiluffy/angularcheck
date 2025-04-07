import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent{
  patient = {
    id: '3-2323-1212',
    name: 'ESPINA, MARÍA',
    gender: 'MUJER',
    age: 32,
    documentId: '23654825',
    address: 'Calle Mayor, 1',
    phone: '656453410',
    birthDate: '09/09/1992',
    ssNumber: '',
    location: 'Paciente en urgencias',
    healthCard: '23654825',
    district: 'Chaclacayo lima',

    // Medical details
    service: 'CIRUGÍA GENERAL',
    center: 'HOSP GENERAL',
    unenf: 'EN7MOC',
    episode: '27969626',
    doctor: 'Dra. Lee',
    admissionService: 'CIRUGÍA GENERAL',
    admissionDate: '14/11/2024 17:00',
    location2: 'CP714'
  };

  activeTab = 'administrativos';

  constructor() { }

  ngOnInit(): void {
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  onAccept(): void {
    console.log('Accept button clicked');
  }

  onCancel(): void {
    console.log('Cancel button clicked');
  }
}