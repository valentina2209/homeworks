import { useState } from "react"; 
import toast from "react-hot-toast";
import { deleteDream } from "../../../shared/api/dreams"; 
import type { Dream } from "../model/types";
import { Trash2, X, Check } from "lucide-react"; 

interface DreamCardProps {
  dream: Dream;
  onDelete: (id: string) => void;
}

export const DreamCard = ({ dream, onDelete }: DreamCardProps) => {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteDream(dream.id!);
      onDelete(dream.id!);
      toast.success('Мрію видалено');
    } catch  {
      toast.error('Не вдалося видалити');
      setIsConfirming(false);
    }
  };

  return (
    <div className="relative group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
      
      <div className="absolute top-4 right-4 flex gap-2">
        {!isConfirming ? (
          <button 
            onClick={() => setIsConfirming(true)}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
          >
            <Trash2 size={18} />
          </button>
        ) : (
          <div className="flex items-center gap-1 bg-red-50 p-1 rounded-xl border border-red-100 animate-in fade-in zoom-in duration-200">
            <button 
              onClick={handleDelete}
              className="p-1.5 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
              title="Підтвердити видалення"
            >
              <Check size={16} />
            </button>
            <button 
              onClick={() => setIsConfirming(false)}
              className="p-1.5 text-gray-500 hover:bg-gray-200 rounded-lg transition-colors"
              title="Скасувати"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-4 pr-12">{dream.title}</h3>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-gray-600">
          <span className="p-1.5 bg-blue-50 rounded-lg text-blue-600">📅</span>
          <span className="text-sm font-medium">Рік: {dream.targetYear}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <span className="p-1.5 bg-amber-50 rounded-lg text-amber-600">🤝</span>
          <span className="text-sm font-medium">З ким: {dream.partner}</span>
        </div>
      </div>
    </div>
  );
};