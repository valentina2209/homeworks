import { useEffect, useState } from 'react';
import { DreamCard } from '../../entities/dream/ui/DreamCard';
import { Modal } from '../../shared/ui/Modal/Modal';
import { AddDreamForm } from '../../features/add-dream/ui/AddDreamForm';
import type { Dream } from '../../entities/dream/model/types';
import { Plus } from 'lucide-react'; 
import { getDreams } from '../../shared/api/dreams';

export const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dreams, setDreams] = useState<Dream[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDreams = async () => {
      try {
        const data = await getDreams() as Dream[];
        setDreams(data);
      } catch (error) {
        console.error("Помилка при завантаженні:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDreams()
  }, []);

  const handleAddDream = (newDream: Dream) => {
    setDreams((prev) => [newDream, ...prev]); 
  };

  const handleDeleteDream = (id: string) => {
    setDreams((prev) => prev.filter(dream => dream.id !== id));
  }

  if (isLoading) return <p className="text-center mt-10">Завантаження мрій...</p>;
  return (
   <div className="max-w-6xl mx-auto mt-10 px-4"> 
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Мої Мрії</h2>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-100"
        >
          <Plus size={20} />
          <span>Додати мрію</span>
        </button>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Створення нової мрії"
      >
        <AddDreamForm
          onSuccess={() => setIsModalOpen(false)}
          onAddDream={handleAddDream}
        />
      </Modal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dreams.map((dream) => (
          <DreamCard
            key={dream.id}
            dream={dream}
            onDelete={handleDeleteDream}
          />
        ))}
      </div>
    </div>
  );
};