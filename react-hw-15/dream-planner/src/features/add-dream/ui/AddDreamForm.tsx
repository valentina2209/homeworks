import React, { useState, useRef } from 'react';
import { db } from '../../../shared/api/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ImagePlus, Loader2 } from 'lucide-react'; 
import toast from 'react-hot-toast';
import type { Dream } from '../../../entities/dream/model/types';

interface AddDreamFormProps {
  onSuccess: () => void;
  onAddDream: (dream: Dream) => void;
}

export const AddDreamForm = ({ onSuccess, onAddDream }: AddDreamFormProps) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState(new Date().getFullYear());
  const [partner, setPartner] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const uploadToCloudinary = async (file: File): Promise<string> => {
     const formData = new FormData();
     formData.append('file', file);
     formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    
     const response = await fetch(
       `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
       {
         method: 'POST',
         body: formData,
       }
     );

     if (!response.ok) {
       throw new Error('Не вдалося завантажити зображення на Cloudinary')
     }

     const data = await response.json();
     return data.secure_url;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) return toast.error('Будь ласка, додайте фото');

    if (!title.trim()) return toast.error('Введіть опис мрії');
    
    setLoading(true);

    try {
      const imageUrl = await uploadToCloudinary(image);

      const newDreamData = {
        title,
        targetYear: Number(year),
        partner,
        imageUrl: imageUrl,
        createdAt: Date.now(), 
      };

      const docRef = await addDoc(collection(db, "dreams"), newDreamData);

      onAddDream({
        id: docRef.id,
        ...newDreamData
      });

      toast.success('Мрію додано! ✨');
      onSuccess(); 
    } catch (error) {
      console.error(error);
      toast.error('Помилка збереження');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="relative h-40 w-full border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all overflow-hidden"
      >
        {preview ? (
          <img src={preview} alt="Preview" className="w-full h-full object-cover" />
        ) : (
          <>
            <ImagePlus className="text-gray-400 mb-2" size={32} />
            <span className="text-sm text-gray-500">Додати фото мрії</span>
          </>
        )}
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleImageChange} 
          className="hidden" 
          accept="image/*"
        />
      </div>

      {/* Опис мрії */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Про що ви мрієте?</label>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          placeholder="Наприклад: Поїхати в навколосвітню подорож"
          rows={3}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Рік */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Рік реалізації</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            min={new Date().getFullYear()}
          />
        </div>
        {/* Друг */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">З ким реалізуєте?</label>
          <input
            type="text"
            value={partner}
            onChange={(e) => setPartner(e.target.value)}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Ім'я друга"
          />
        </div>
      </div>

      {/* Кнопка відправки */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 disabled:bg-blue-300 flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-200"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Зберігаємо...
          </>
        ) : (
          'Додати у список'
        )}
      </button>
    </form>
  );
};