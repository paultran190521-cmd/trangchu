import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export function LighthouseBooks() {
  const items = [
    { id: 1, title: 'Hiểu về trái tim', author: 'Minh Niệm', type: 'Sách nói', time: '15:20' },
    { id: 2, title: 'Muôn kiếp nhân sinh', author: 'Nguyên Phong', type: 'Video tóm tắt', time: '22:15' },
    { id: 3, title: 'Sức mạnh của hiện tại', author: 'Eckhart Tolle', type: 'Podcast', time: '45:00' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-serif text-mind-amber">Ngọn Hải Đăng</h2>
        <p className="text-mind-light/70 max-w-lg mx-auto">Nơi ánh sáng tri thức xua tan sương mù tâm trí. Lắng nghe những thông điệp giúp bạn nhìn rõ hơn con đường phía trước.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            key={item.id} 
            className="group flex flex-col md:flex-row items-start md:items-center p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer space-y-4 md:space-y-0"
          >
            <div className="w-16 h-16 bg-mind-amber/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-mind-amber/30 transition-colors relative overflow-hidden">
               <div className="absolute inset-0 bg-mind-amber blur-md opacity-20"></div>
               <Play className="w-8 h-8 text-mind-amber ml-1" />
            </div>
            <div className="md:ml-4 flex-1">
              <h4 className="font-serif text-lg text-white mb-1 group-hover:text-mind-amber transition-colors">{item.title}</h4>
              <p className="text-sm text-mind-light/60">{item.author} • {item.type}</p>
            </div>
            <div className="text-xs font-mono text-mind-light/40 bg-black/20 px-2 py-1 rounded">
              {item.time}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
