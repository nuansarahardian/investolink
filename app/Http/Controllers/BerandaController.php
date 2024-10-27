<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Aduan;

class BerandaController extends Controller
{
    // Fungsi untuk menampilkan homepage dengan form input di ContactSection
    public function showForm()
    {
        return Inertia::render('Homepage/Homepage'); // Tidak perlu mengirim data aduan karena hanya menampilkan form
    }

    public function create(Request $request)
    {
        // Validasi input
        $validatedData = $request->validate([
            'nama_lengkap' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'no_handphone' => 'required|string|max:50',
            'subyek' => 'required|string|max:255',
            'isi_aduan' => 'required|string',

        ]);
      $validatedData['is_solved'] = 0; 
        // Menyimpan data ke database
        Aduan::create($validatedData);
    
        // Redirect ke homepage dengan pesan sukses setelah data berhasil disimpan
        return redirect()->back()->with('success', 'Aduan berhasil ditambahkan!');
    }
}
