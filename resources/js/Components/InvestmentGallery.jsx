import React from "react";

const InvestmentGallery = () => {
  // Data dummy untuk kartu proyek investasi
  const projects = [
    {
      location: "Tuban",
      category: "Karbon Rendah",
      title: "Power & Steam Generation, Water Desalination Plant GRR Tuban Project",
      company: "PT Pertamina Power Indonesia",
    },
    {
      location: "Sumatera Utara",
      category: "Energi",
      title: "PLTM Lau Gunung 2 x 7,5 MW",
      company: "PT Inpola Meka Energi",
    },
    {
      location: "Tuban",
      category: "Karbon Rendah",
      title: "Power & Steam Generation, Water Desalination Plant GRR Tuban Project",
      company: "PT Pertamina Power Indonesia",
    },
  ];

  return (
    <section className="py-16 bg-gray-50"> {/* Mengubah py-12 menjadi py-16 */}
      <div className="container mx-auto px-8"> {/* Mengubah px-4 menjadi px-8 */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6"> {/* Mengubah margin bottom dari mb-4 menjadi mb-6 */}
          Galeri Proyek Investasi
        </h2>
        <p className="text-gray-600 mb-10"> {/* Mengubah margin bottom dari mb-8 menjadi mb-10 */}
          Eksplor beragam proyek investasi dalam negeri milik perusahaan-perusahaan
          terkemuka di Indonesia
        </p>

        {/* Container untuk kartu proyek investasi */}
        <div className="flex space-x-6 overflow-x-auto hide-scroll-bar pb-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-72 bg-white rounded-xl shadow-lg flex-shrink-0"
            >
              {/* Placeholder gambar proyek */}
              <div className="bg-gray-300 h-40 rounded-t-xl"></div>

              {/* Informasi proyek */}
              <div className="p-6"> {/* Menambah padding di dalam kartu dari p-4 menjadi p-6 */}
                {/* Lokasi dan kategori */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 11c0-1.38.56-2.63 1.46-3.54A5.002 5.002 0 0119 11a5 5 0 01-5 5v1a3 3 0 006 0v-1a3 3 0 00-6 0v-1a5 5 0 01-5-5c0-2.48 1.49-4.44 3.54-5.46A5.001 5.001 0 0112 4a5 5 0 11-5 5c0 2.76 2.24 5 5 5zm-7 5a3 3 0 00-3 3 3 3 0 00.17.83L5 21v-1a3 3 0 00-3-3z"
                      />
                    </svg>
                    {project.location}
                  </div>
                  <span className="text-sm font-medium bg-gray-200 text-gray-600 rounded-full px-3 py-1">
                    {project.category}
                  </span>
                </div>

                {/* Judul proyek */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>

                {/* Nama perusahaan */}
                <p className="text-gray-600 font-medium mt-2">
                  {project.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentGallery;
