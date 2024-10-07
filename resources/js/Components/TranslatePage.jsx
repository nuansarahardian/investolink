import React, { useState } from "react";
import axios from "axios";

// Fungsi untuk mengambil elemen teks yang relevan
function getTextElements() {
    return document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, div"); // Misalnya, hanya paragraf dan heading
}

function TranslatePage() {
    const [translatedText, setTranslatedText] = useState(""); // State untuk hasil terjemahan
    const [targetLang, setTargetLang] = useState("en"); // Default bahasa target: Inggris
    const [originalTexts, setOriginalTexts] = useState([]); // Menyimpan teks asli

    // Fungsi untuk mengirim teks ke backend untuk diterjemahkan
    const translatePageContent = () => {
        const elements = getTextElements(); // Ambil elemen teks dari halaman
        const textContent = Array.from(elements)
            .map((el) => el.textContent.trim())
            .join(" "); // Gabungkan teks dari elemen

        // Simpan teks asli sebelum diterjemahkan
        if (originalTexts.length === 0) {
            const original = Array.from(elements).map((el) => el.textContent);
            setOriginalTexts(original); // Simpan teks asli dalam state
        }

        // Kirim permintaan ke backend untuk menerjemahkan teks
        axios
            .post("/translate", {
                text: textContent,
                target_lang: targetLang,
            })
            .then((response) => {
                setTranslatedText(response.data.translatedText); // Simpan hasil terjemahan
                replaceTextContent(response.data.translatedText); // Ganti teks di halaman dengan hasil terjemahan
            })
            .catch((error) => {
                console.error(
                    "Terjadi kesalahan saat menerjemahkan teks:",
                    error
                );
            });
    };

    // Fungsi untuk mengganti teks asli dengan teks yang diterjemahkan
    const replaceTextContent = (translatedText) => {
        const elements = getTextElements();
        let textParts = translatedText.split(" "); // Pecah hasil terjemahan menjadi array

        elements.forEach((element, index) => {
            let originalText = originalTexts[index]; // Ambil teks asli yang sudah disimpan
            if (originalText && originalText.length > 0) {
                // Ambil bagian teks hasil terjemahan sesuai elemen
                let elementText = textParts
                    .splice(0, originalText.split(" ").length)
                    .join(" ");
                element.textContent = elementText; // Ganti teks elemen dengan terjemahan
            }
        });
    };

    // Fungsi untuk mengembalikan teks asli
    const restoreOriginalText = () => {
        const elements = getTextElements();
        elements.forEach((element, index) => {
            element.textContent = originalTexts[index]; // Kembalikan ke teks asli
        });
        setOriginalTexts([]); // Kosongkan state teks asli
    };

    return (
        <div>
            <h1>Terjemahan Otomatis Halaman</h1>
            {/* Pilihan bahasa */}
            <button onClick={() => setTargetLang("id")}>
                Bahasa Indonesia
            </button>
            <button onClick={() => setTargetLang("en")}>English</button>
            <button onClick={translatePageContent}>Translate</button>
            <button onClick={restoreOriginalText}>Restore Original</button>

            {/* Tampilkan hasil terjemahan (jika dibutuhkan secara eksplisit) */}
            <div>
                <p>{translatedText}</p>
            </div>
        </div>
    );
}

export default TranslatePage;
