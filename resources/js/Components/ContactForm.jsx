import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Nama Lengkap"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="E-mail"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
            Subyek
          </label>
          <input
            type="text"
            id="subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Contoh: Kendala Teknis Pencatatan"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Pesan
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            rows="4"
            placeholder="Tulis pesan Anda di sini"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-900"
        >
          Kirim Pesan
        </button>
      </form>
      
    </div>
  );
};

export default ContactForm;
