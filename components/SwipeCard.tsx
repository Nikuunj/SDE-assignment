import React from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { SwipeItem } from '@/lib/utils';
import Image from 'next/image';


export const SwipeCard: React.FC<{
  item: SwipeItem;
  onSwipe: (direction: 'left' | 'right', item: SwipeItem) => void;
  index: number;
}> = ({ item, onSwipe, index }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-20, 20]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    if (Math.abs(offset) > 100 || Math.abs(velocity) > 800) {
      const direction = offset > 0 ? 'right' : 'left';
      onSwipe(direction, item);
    }
  };

  return (
    <motion.div
      className="absolute w-80 h-[90vh] flex z-30 cursor-grab active:cursor-grabbing"
      style={{
        x,
        rotate,
        opacity,
        zIndex: 10 - index,
      }}
      initial={{ scale: 1 - index * 0.5, y: index * -20 }}
      animate={{ scale: 1 - index * 0.005, y: index * -20 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.1 }}
    >
      <div className="w-full h-full  bg-white rounded-lg shadow-2xl overflow-hidden">
        <div className="relative h-96/151 overflow-hidden">
           <Image
              src={item.image}
              alt={item.title}
              width={48}
              height={48}
              className="w-12 h-12 object-cover rounded-lg"
            />
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {item.brand}
          </div>
          <div className="absolute top-4 right-4 bg-zinc-700/80 px-2 py-1 rounded-full flex items-center gap-1">
            <span className="text-yellow-400 text-xs">⭐</span>
            <span className="text-xs font-medium">{item.rating}</span>
          </div>
        </div>
        <div className="p-4 space-y-5 ">
          <div className='space-y-3'>
            <div className="font-bold text-3xl text-gray-900 ">{item.title} </div>
            <p className="text-2xl font-bold text-green-600">${item.price}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            opacity: useTransform(x, [0, 100], [0, 1]),
          }}
        >
          <div className=" text-white px-4 py-2 rounded-full transform rotate-12 ">
            <span className="text-xl">❤️</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            opacity: useTransform(x, [-100, 0], [1, 0]),
          }}
        >
          <div className="bg-red-500 text-white px-4 py-2 rounded-full transform -rotate-12 border-4 border-red-500">
            <span className="text-xl">✖️</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
