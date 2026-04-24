import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Key } from 'lucide-react';

export function TempleTest() {
  const [step, setStep] = useState(0);
  const [code, setCode] = useState<string | null>(null);

  const questions = [
    { text: "Lúc này, bạn cảm thấy tầng năng lượng bên trong mình như thế nào?", options: ["Phẳng lặng, trống rỗng", "Cuộn sóng, bồn chồn", "Tươi sáng, nhẹ nhàng", "Nặng nề, mệt mỏi"] },
    { text: "Nếu tâm trí bạn là một căn phòng, nó trông ra sao?", options: ["Gọn gàng, ngăn nắp", "Nhiều đồ đạc ngổn ngang", "Chỉ có một điểm sáng nhỏ", "Cửa sổ đang mở rộng đón gió"] },
  ];

  const handleAnswer = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Generate a random mock code
      const codes = ["AWAKE-7", "PEACE-3", "HEAL-9", "LIGHT-1"];
      setCode(codes[Math.floor(Math.random() * codes.length)]);
    }
  };

  return (
    <div className="space-y-8 min-h-[400px] flex flex-col items-center justify-center">
      <div className="text-center space-y-3 mb-8">
        <h2 className="text-3xl md:text-4xl font-serif text-white">Ngôi Đền Thấu Hiểu</h2>
        <p className="text-mind-light/70 max-w-lg mx-auto">Chậm lại một nhịp. Trả lời thật lòng để nhận Mật mã hành trình của bạn.</p>
      </div>

      <AnimatePresence mode="wait">
        {!code ? (
          <motion.div 
            key="question"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="w-full max-w-md space-y-6"
          >
            <h3 className="text-xl font-medium text-mind-light text-center leading-relaxed">
              {questions[step].text}
            </h3>
            <div className="grid gap-3">
              {questions[step].options.map((opt, i) => (
                <button 
                  key={i}
                  onClick={handleAnswer}
                  className="p-4 text-left border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/30 text-mind-light transition-all"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="result"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center space-y-6 bg-white/5 p-8 border border-white/10 rounded-2xl w-full max-w-md"
          >
            <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full mb-2">
              <Key className="w-8 h-8 text-white" />
            </div>
            <div className="text-center space-y-1">
              <p className="text-sm text-mind-light/60 uppercase tracking-widest">Mật mã của bạn</p>
              <h1 className="text-4xl font-mono font-bold text-white tracking-widest">{code}</h1>
            </div>
            <p className="text-center text-sm text-mind-light/80 pt-4 border-t border-white/10">
              Hãy lưu lại mật mã này. Nó đại diện cho trạng thái hiện tại của bạn và sẽ cần thiết cho cuốn sổ hành trình phía trước.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
