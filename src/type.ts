interface surah {
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
    data: surah[];
}

export interface surahData {
    code: number;
    message: string;
    data: Data | null;
}

export interface Loved {
    id: number;
    title: string;
    translate: string;
}
export type Placement = "bottom" | "left" | "right" | "top";
