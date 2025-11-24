# Crypto App - Ionic Angular

Aplikasi mobile untuk menampilkan data cryptocurrency real-time menggunakan Ionic Framework dan Angular.

## Fitur

- Menampilkan data cryptocurrency dari API Coinlore
- Menampilkan Rank, Name, Symbol, dan Price (USD)
- Tombol Refresh untuk memperbarui data
- Desain responsif sesuai mockup

## Teknologi

- Ionic Framework 7
- Angular 17
- TypeScript
- RxJS

## Instalasi

1. Install dependencies:
```bash
npm install
```

2. Jalankan aplikasi:
```bash
ionic serve
```

atau

```bash
npm start
```

## API

Aplikasi ini menggunakan API dari Coinlore:
- URL: https://api.coinlore.net/api/tickers/
- Method: GET
- Response: JSON dengan data cryptocurrency

## Struktur Proyek

```
crypto-app/
├── src/
│   ├── app/
│   │   ├── home/              # Halaman utama
│   │   ├── models/            # Interface TypeScript
│   │   ├── services/          # Service untuk API
│   │   └── ...
│   ├── theme/                 # Tema dan variabel
│   └── ...
├── package.json
└── README.md
```
