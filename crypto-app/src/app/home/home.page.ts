import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { Cryptocurrency } from '../models/cryptocurrency.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cryptocurrencies: Cryptocurrency[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
    this.loadCryptoData();
  }

  // Method untuk memuat data cryptocurrency
  loadCryptoData() {
    this.loading = true;
    this.error = '';

    this.cryptoService.getCryptocurrencies().subscribe({
      next: (response) => {
        // Ambil hanya 7 cryptocurrency pertama sesuai dengan mockup
        this.cryptocurrencies = response.data.slice(0, 7);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading crypto data:', err);
        this.error = 'Failed to load cryptocurrency data. Please try again.';
        this.loading = false;
      }
    });
  }

  // Method untuk refresh data (dipanggil dari tombol Refresh)
  refreshData(event?: any) {
    this.cryptoService.getCryptocurrencies().subscribe({
      next: (response) => {
        this.cryptocurrencies = response.data.slice(0, 7);
        if (event) {
          event.target.complete();
        }
      },
      error: (err) => {
        console.error('Error refreshing data:', err);
        this.error = 'Failed to refresh data. Please try again.';
        if (event) {
          event.target.complete();
        }
      }
    });
  }

  // Method untuk format harga (menambahkan pemisah ribuan)
  formatPrice(price: string): string {
    const num = parseFloat(price);
    return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}
