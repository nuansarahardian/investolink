{
    /* Card Menampilkan Provinsi */
}
<div className="grid grid-cols-6 gap-4 mr-[24px] mt-4">
    {Array.from(
        new Set(
            selectedCard.komoditas.flatMap((komoditas) =>
                komoditas.provinsi.map((provinsi) => provinsi.nama)
            )
        )
    ).map((uniqueProvinsiName, index) => {
        const provinsi = selectedCard.komoditas
            .flatMap((komoditas) => komoditas.provinsi)
            .find((prov) => prov.nama === uniqueProvinsiName);

        return (
            <div
                key={index}
                className={`card col-span-1 flex flex-col justify-between p-4 rounded-lg border min-w-[116px] max-w-full bg-[#ffffff] border-[#D1D0D7] text-[#86858D] h-[96px] cursor-pointer 
             ${
                 selectedProvinces.includes(uniqueProvinsiName)
                     ? "bg-blue-100 border-blue-400" // Ganti warna jika dipilih
                     : ""
             }`}
                onClick={() => handleProvinsiClick(uniqueProvinsiName)}
            >
                <div className="flex justify-between">
                    <img
                        src={
                            provinceLogos[uniqueProvinsiName] ||
                            "https://via.placeholder.com/150"
                        }
                        className="w-6 mb-2"
                        alt={uniqueProvinsiName}
                    />
                    {/* Tambahkan onClick di sini */}
                    <Link href={`/provinsi/${provinsi.id}`}>
                        <img
                            src="/icon/Vector.png"
                            alt="icon"
                            className="w-4 h-4 cursor-pointer"
                        />
                    </Link>
                </div>
                <p className="text-[12px] leading-tight">
                    {uniqueProvinsiName}
                </p>
            </div>
        );
    })}
</div>;
