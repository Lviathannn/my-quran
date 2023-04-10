interface Surah {
   nomor: number;
   nama: string;
   namaLatin: string;
   jumlahAyat: number;
   tempatTurun: string;
   arti: string;
   deskripsi: string;
   audioFull: {
      [key: string]: string;
   };
}

interface Data {
   data: Surah[];
}

export interface SurahData {
   code: number;
   message: string;
   data: Data | null;
}
