# Panduan Menjalankan Aplikasi Crypto

## Langkah 1: Install Dependencies
```bash
cd crypto-app
npm install
```

## Langkah 2: Jalankan Aplikasi

### Opsi A: Menggunakan Ionic CLI
```bash
ionic serve
```

### Opsi B: Menggunakan NPM
```bash
npm start
```

Aplikasi akan berjalan di: http://localhost:8100

## Testing di Browser
- Buka http://localhost:8100 di browser
- Klik tombol "Refresh" untuk memuat data cryptocurrency
- Data akan ditampilkan dalam format card dengan:
  - Rank (1-7)
  - Name cryptocurrency (Bitcoin, Ethereum, dll)
  - Symbol (BTC, ETH, USDT, dll)
  - Price dalam USD

## File-File Utama:

### 1. cryptocurrency.model.ts
- Mendefinisikan interface untuk data cryptocurrency
- Memastikan type safety di seluruh aplikasi

### 2. crypto.service.ts
- Service untuk fetch data dari API
- Menggunakan HttpClient untuk GET request
- URL API: https://api.coinlore.net/api/tickers/

### 3. home.page.ts
- Component logic untuk halaman utama
- Method loadCryptoData(): load data saat init
- Method refreshData(): refresh data manual
- Method formatPrice(): format harga dengan pemisah ribuan

### 4. home.page.html
- Template HTML untuk UI
- Tombol Refresh di bagian atas
- List cryptocurrency dalam bentuk card
- Loading spinner saat fetch data
- Error handling untuk gagal load

### 5. home.page.scss
- Styling untuk tampilan sesuai mockup
- Card background cream (#f5e6d3)
- Blue button untuk refresh
- Typography yang jelas dan readable

## Fitur-Fitur:
✅ Menampilkan 7 cryptocurrency teratas
✅ Tombol Refresh untuk update data
✅ Loading indicator
✅ Error handling
✅ Format harga dengan decimal 2 digit
✅ Design sesuai mockup (card cream, blue button)
✅ Responsive layout

## Troubleshooting:

Jika ada error "command not found: ionic":
```bash
npm install -g @ionic/cli
```

Jika ada error saat npm install:
```bash
rm -rf node_modules package-lock.json
npm install
```
