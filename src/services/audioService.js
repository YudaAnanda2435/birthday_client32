// Variabel untuk melacak audio yang sedang aktif
let currentAudio = null;
let currentAudioSrc = null;

// Fungsi untuk memutar musik
// Menerima 'src' sebagai parameter untuk mengetahui file musik mana yang harus diputar
export const playMusic = (src) => {
  // Jika musik yang diminta sudah berputar, jangan lakukan apa-apa
  if (currentAudio && currentAudioSrc === src) {
    return;
  }

  // Jika ada musik lain yang sedang berputar, hentikan dulu
  if (currentAudio) {
    currentAudio.pause();
  }

  // Buat dan putar audio baru
  currentAudio = new Audio(src);
  currentAudio.loop = true;
  currentAudio.play().catch((error) => {
    console.error(`Gagal memutar ${src}:`, error);
  });
  currentAudioSrc = src;
};

// Fungsi untuk menghentikan musik yang sedang aktif
export const stopMusic = () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
    currentAudioSrc = null;
  }
};
