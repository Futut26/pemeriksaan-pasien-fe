import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PemeriksaanService } from '../../services/pemeriksaan.service';
import { FormPemeriksaanComponent } from '../form-pemeriksaan/form-pemeriksaan.component';

@Component({
  selector: 'app-pemeriksaan',
  imports: [CommonModule, FormPemeriksaanComponent],
  templateUrl: './pemeriksaan.component.html',
  styleUrl: './pemeriksaan.component.css'
})
export class PemeriksaanComponent {
  no: number = 1;
  pemeriksaan: any[] = [];
  selectedPemeriksaan: any = null;
  isFormVisible = false;

  constructor(
    private pemeriksaanService: PemeriksaanService
  ) { }

  ngOnInit(): void {
    this.loadPemeriksaanData();
    console.log(this.pemeriksaan);
  }

  loadPemeriksaanData(): void {
    this.pemeriksaanService.getAllPemeriksaan().subscribe((data) => {
      this.pemeriksaan = data.pemeriksaan;
      console.log(this.pemeriksaan);
      console.log(data);
    });
  }

  onAdd(): void {
    this.selectedPemeriksaan = null;
    this.isFormVisible = true;
  }

  onEdit(data: any): void {
    this.selectedPemeriksaan = data;
    this.isFormVisible = true;
  }

  onCancel(): void {
    this.isFormVisible = false;
  }
  
  handleFormSubmit(data: any): void {
    if (this.selectedPemeriksaan) {
      // Update data
      this.pemeriksaanService.updatePemeriksaan(this.selectedPemeriksaan.id_pemeriksaan, data).subscribe({
        next: () => {
          this.loadPemeriksaanData();
          this.isFormVisible = false;
          alert('Data pemeriksaan berhasil diperbarui.');
        },
        error: (err) => {
          console.error('Error updating data:', err);
          alert('Terjadi kesalahan saat memperbarui data. Silakan coba lagi.');
        }
      });
    } else {
      // Create new data
      this.pemeriksaanService.createPemeriksaan(data).subscribe({
        next: () => {
          this.loadPemeriksaanData();
          this.isFormVisible = false;
          alert('Data pemeriksaan berhasil ditambahkan.');
        },
        error: (err) => {
          console.error('Error creating data:', err);
          alert('Terjadi kesalahan saat menambahkan data. Silakan coba lagi.');
        }
      });
    }
  }
  

  onDelete(id: string): void {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      this.pemeriksaanService.deletePemeriksaan(id).subscribe(() => {
        this.loadPemeriksaanData();
      });
    }
  }

}
