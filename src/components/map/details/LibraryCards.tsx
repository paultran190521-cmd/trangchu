import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Brain, Leaf } from 'lucide-react';

export function LibraryCards() {
  const cards = [
    {
      icon: <Brain className="w-6 h-6 text-indigo-400" />,
      title: "Khoa học Não bộ",
      content: "Khi bạn thiền định, hạch hạnh nhân (trung tâm sợ hãi) co lại, và vỏ não trước trán (trung tâm tư duy logic) dày lên. Bạn thực sự đang cấu trúc lại não bộ của mình."
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-400" />,
      title: "Quy luật Vô thường",
      content: "Không có cảm xúc nào là mãi mãi. Nỗi buồn, sự tức giận, hay niềm vui... tất cả đều giống như những đám mây trôi qua bầu trời rộng lớn của tâm trí bạn."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
      title: "Chánh niệm",
      content: "Khả năng neo giữ sự chú ý vào giây phút hiện tại mà không phán xét. Đừng bám víu vào quá khứ, đừng lo âu về tương lai, sức mạnh chỉ tồn tại ở hiện tại."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-3xl md:text-4xl font-serif text-mind-amber">Thư Viện Khoa Học</h2>
        <p className="text-mind-light/70 max-w-lg mx-auto">Những đúc kết từ khoa học và triết lý, giúp bạn hiểu rõ cơ chế vận hành của tâm trí.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="group block relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:-translate-y-2 h-full flex flex-col"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 pointer-events-none transition-transform group-hover:scale-110"></div>
            <div className="mb-6 bg-black/20 w-12 h-12 rounded-full flex items-center justify-center border border-white/5 shadow-inner">
              {card.icon}
            </div>
            <h3 className="text-xl font-serif text-white mb-3">{card.title}</h3>
            <p className="text-sm text-mind-light/70 leading-relaxed flex-1">
              {card.content}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
