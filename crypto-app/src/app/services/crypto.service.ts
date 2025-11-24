import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptoApiResponse } from '../models/cryptocurrency.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private apiUrl = 'https://api.coinlore.net/api/tickers/';

  constructor(private http: HttpClient) { }

  // Method untuk mengambil data cryptocurrency dari API
  getCryptocurrencies(): Observable<CryptoApiResponse> {
    return this.http.get<CryptoApiResponse>(this.apiUrl);
  }
}
