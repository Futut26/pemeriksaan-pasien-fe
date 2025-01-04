import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormPasienComponent } from '../form-pasien/form-pasien.component';
import { PasienService } from '../../services/pasien.service';

@Component({
  selector: 'app-pasien',
  imports: [CommonModule, FormPasienComponent],
  templateUrl: './pasien.component.html',
  styleUrl: './pasien.component.css'
})
export class PasienComponent {
  no: number = 1;
  pasien: any[] = [];
  selectedPasien: any = null;
  isFormVisible = false;

  constructor(
    private pasienService: PasienService
  ){}

  ngOnInit(): void {
    this.loadPasienData();
    console.log("pasien :", this.pasien);
  }

  loadPasienData(): void {
    this.pasienService.getAllPasien().subscribe((data) => {
      this.pasien = data;
      console.log(this.pasien);
      console.log("pasien",data);
    });
  }

  onAdd(): void {
    this.selectedPasien = null;
    this.isFormVisible = true;
  }

  onEdit(data: any): void {
    this.selectedPasien = data;
    this.isFormVisible = true;
  }

  onCancel(): void {
    this.isFormVisible = false;
  }


  handleFormSubmit(data: any): void {
    if (this.selectedPasien) {
      // Update data
      this.pasienService.updatePasien(this.selectedPasien.id_pasien, data).subscribe({
        next: () => {
          this.loadPasienData();
          this.isFormVisible = false;
          alert('Data pasien berhasil diperbarui.');
        },
        error: (err) => {
          console.error('Error updating data:', err);
          alert('Terjadi kesalahan saat memperbarui data. Silakan coba lagi.');
        }
      });
    } else {
      // Add new data
      this.pasienService.createPasien(data).subscribe({
        next: () => {
          this.loadPasienData();
          this.isFormVisible = false;
          alert('Data pasien berhasil ditambahkan.');
        },
        error: (err) => {
          console.error('Error adding data:', err);
          alert('Terjadi kesalahan saat menambahkan data. Silakan coba lagi.');
        }
      });
    }
  }

  onDelete(id: string): void {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      this.pasienService.deletePasien(id).subscribe({
        next: () => {
          this.loadPasienData();
          alert('Data dokter berhasil dihapus.');
        },
        error: (err) => {
          console.error('Error deleting data:', err);
          alert('Terjadi kesalahan saat menghapus data. Silakan coba lagi.');
        }
      });
    }
  }


}
