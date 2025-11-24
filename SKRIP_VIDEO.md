# Skrip Video Dokumentasi - Aplikasi Cryptocurrency Ionic

## INTRO (0:00 - 0:15)
**Visual**: Logo Ionic + Judul Aplikasi
**Narasi**:
"Halo! Pada video kali ini saya akan menjelaskan alur pembuatan aplikasi cryptocurrency menggunakan Ionic Angular yang menampilkan data dari API CoinLore."

---

## BAGIAN 1: STRUKTUR PROJECT (0:15 - 1:00)
**Visual**: Tampilkan struktur folder di VS Code
**Narasi**:
"Pertama, saya membuat project Ionic dengan struktur yang terorganisir:
- Folder `models` untuk mendefinisikan interface TypeScript
- Folder `services` untuk menghandle API calls
- Folder `home` sebagai halaman utama aplikasi

Aplikasi ini menggunakan Ionic 7, Angular 17, dan RxJS untuk reactive programming."

**Highlight**:
- `cryptocurrency.model.ts` → Interface untuk data crypto
- `crypto.service.ts` → Service untuk fetch API
- `home.page.ts` → Logic component

---

## BAGIAN 2: MODEL & INTERFACE (1:00 - 1:30)
**Visual**: Buka file `cryptocurrency.model.ts`
**Narasi**:
"Di file model, saya mendefinisikan 2 interface:
1. Interface `Cryptocurrency` dengan properties: id, symbol, name, rank, dan price_usd
2. Interface `CryptoApiResponse` untuk response dari API yang berisi array data dan info metadata

Interface ini memastikan type safety di seluruh aplikasi."

**Code Highlight**:
```typescript
export interface Cryptocurrency {
  id: string;
  symbol: string;
  name: string;
  rank: string;
  price_usd: string;
}
```

---

## BAGIAN 3: SERVICE API (1:30 - 2:15)
**Visual**: Buka file `crypto.service.ts`
**Narasi**:
"Service ini bertanggung jawab untuk komunikasi dengan API CoinLore.

Method `getCryptocurrencies()` menggunakan HttpClient untuk melakukan GET request ke endpoint:
https://api.coinlore.net/api/tickers/

Service ini return Observable yang bisa di-subscribe oleh component."

**Code Highlight**:
```typescript
getCryptocurrencies(): Observable<CryptoApiResponse> {
  return this.http.get<CryptoApiResponse>(this.apiUrl);
}
```

**Visual**: Tampilkan response API di browser

---

## BAGIAN 4: COMPONENT LOGIC (2:15 - 3:00)
**Visual**: Buka file `home.page.ts`
**Narasi**:
"Di home component, ada 3 method utama:

1. `loadCryptoData()` - Dipanggil saat ngOnInit untuk fetch data awal
   - Subscribe ke service
   - Ambil 7 data pertama menggunakan slice
   - Handle loading state

2. `refreshData()` - Untuk manual refresh dengan pull-to-refresh
   - Re-fetch data
   - Complete event setelah selesai

3. `formatPrice()` - Helper function untuk format harga dengan 2 desimal"

**Code Highlight**:
```typescript
this.cryptoService.getCryptocurrencies().subscribe({
  next: (response) => {
    this.cryptocurrencies = response.data.slice(0, 7);
    this.isLoading = false;
  }
});
```

---

## BAGIAN 5: UI TEMPLATE (3:00 - 3:45)
**Visual**: Buka file `home.page.html`
**Narasi**:
"Template HTML menggunakan komponen Ionic:

- `ion-refresher` untuk pull-to-refresh
- `ion-spinner` untuk loading indicator
- `ion-card` untuk menampilkan setiap crypto

Setiap card menampilkan:
- Rank di kolom pertama
- Name & Symbol di kolom kedua
- Price USD di kolom ketiga dengan warna hijau

Layout menggunakan ion-grid yang responsive."

**Visual**: Scroll through HTML structure

---

## BAGIAN 6: STYLING (3:45 - 4:15)
**Visual**: Buka file `home.page.scss`
**Narasi**:
"Untuk styling, saya menggunakan:

- Background cream (#f5e6d3) untuk card sesuai mockup
- Tombol refresh berwarna biru dengan shadow
- Grid 3 kolom dengan proporsi 1:3:2
- Responsive font size dan padding
- Warna hijau untuk harga (#2ecc71)

Design ini mengikuti mockup yang diberikan dengan style yang clean dan modern."

**Visual**: Tampilkan perbandingan mockup vs hasil

---

## BAGIAN 7: DEMO APLIKASI (4:15 - 5:00)
**Visual**: Browser dengan aplikasi running
**Narasi**:
"Mari kita lihat hasil akhir aplikasi:

1. Data 7 cryptocurrency muncul otomatis saat aplikasi load
2. Setiap card menampilkan rank, nama, symbol, dan harga
3. Tombol refresh berfungsi untuk update data
4. Pull-to-refresh juga tersedia
5. Loading indicator muncul saat fetch data

Aplikasi ini sudah terintegrasi dengan API CoinLore dan menampilkan data real-time."

**Aksi**:
- Klik tombol refresh
- Tunjukkan pull-to-refresh
- Highlight perubahan data

---

## BAGIAN 8: DEPLOYMENT & GITHUB (5:00 - 5:30)
**Visual**: GitHub repository
**Narasi**:
"Source code sudah di-push ke GitHub dengan struktur yang rapi:
- File cache dan node_modules sudah di-ignore
- README tersedia dengan dokumentasi lengkap
- PANDUAN.md dalam Bahasa Indonesia untuk setup

Untuk menjalankan, cukup:
```
npm install
ionic serve
```

Dan aplikasi akan berjalan di localhost:8100"

**Visual**: Show GitHub repo structure

---

## PENUTUP (5:30 - 5:45)
**Visual**: Aplikasi running + code editor
**Narasi**:
"Demikian penjelasan singkat pembuatan aplikasi cryptocurrency dengan Ionic Angular. 

Key points:
✓ Struktur project yang terorganisir
✓ Type-safe dengan TypeScript
✓ Reactive programming dengan RxJS
✓ UI sesuai mockup
✓ Real-time data dari API

Terima kasih sudah menonton!"

**Visual**: Logo Ionic + GitHub link

---

## TECHNICAL NOTES

### Video Specs:
- Duration: ~5-6 menit
- Resolution: 1920x1080 (Full HD)
- Format: MP4 (H.264)
- FPS: 30

### Tools yang Digunakan:
- Screen recording: OBS Studio / QuickTime
- Code editor: VS Code
- Browser: Chrome DevTools
- Video editing: DaVinci Resolve / iMovie

### B-Roll Shots:
1. Code typing (sped up)
2. File navigation
3. Terminal commands
4. Browser refresh
5. Data updates
6. Git commits

### Transitions:
- Fade untuk scene changes
- Zoom untuk code highlights
- Slide untuk file switches

### Audio:
- Voice over: Clear, moderate pace
- Background music: Soft tech/corporate music (low volume)
- Sound effects: Minimal (click sounds, notification sounds)

---

## SCRIPT VARIATIONS

### Versi Singkat (3 menit):
Fokus pada:
- Struktur project
- Service API
- Component logic
- Quick demo

### Versi Lengkap (10 menit):
Tambahan:
- Penjelasan detail setiap method
- Error handling
- Testing
- Deployment options
- Best practices

### Versi Tutorial (20+ menit):
Step-by-step dari awal:
- Setup environment
- Create project
- Install dependencies
- Code each file
- Test & debug
- Deploy

---

## CALL TO ACTION
"Source code tersedia di GitHub: https://github.com/HelmiRafif/test-ts

Jangan lupa like, comment, dan subscribe untuk tutorial programming lainnya!"
