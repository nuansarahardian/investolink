<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Aduan;

class DashboardController extends Controller
{
    public function index()
    {
        $aduan = Aduan::all(); // Mengambil semua data dari tabel aduan
        return Inertia::render('Dashboard', [
            'aduan' => $aduan // Kirim data sebagai props ke komponen React Dashboard
        ]);
    }

    public function toggleSolved($id, Request $request)
    {
        // Mengambil aduan berdasarkan ID
        $aduan = Aduan::findOrFail($id);
        // Mengubah status is_solved
        $aduan->is_solved = $request->is_solved;
        $aduan->save();

        // Mengirim kembali dengan pesan sukses
        return redirect()->back()->with('success', 'Status aduan berhasil diubah.');
    }
}
