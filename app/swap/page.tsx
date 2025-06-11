"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { mockItems, SwipeItem } from '@/lib/utils';
import { SwipeCard } from '@/components/SwipeCard';

const SwipeFeed: React.FC = () => {
  const [items, setItems] = useState<SwipeItem[]>(mockItems);
  const [savedItems, setSavedItems] = useState<SwipeItem[]>([]);
  const [showSaved, setShowSaved] = useState(false);

  const handleSwipe = (direction: 'left' | 'right', item: SwipeItem) => {
    if (direction === 'right') {
      setSavedItems(prev => [...prev, item]);
      console.log('Saved item:', item);
    }
    
    // Remove the swiped item after animation
    setTimeout(() => {
        setItems(prev => {
        const updated = prev.filter(i => i.id !== item.id);
        return [...updated, item];
  });
    }, 150);
  };

  const resetFeed = () => {
    setItems(mockItems);
    setSavedItems([]);
  };

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      <div className="max-w-md  mx-auto flex flex-col gap-10">

        <div className="fixed bottom-2 left-0 items-center flex gap-4 mb-8 justify-center w-full z-50">
          <button
            onClick={() => setShowSaved(!showSaved)}
            className="flex items-center gap-2 px-4 py-2 bg-black/90 text-white rounded-lg hover:bg-red-950 duration-300 transition-colors outline-none"
          >
             
            Saved ({savedItems.length})
          </button>

          <button
            onClick={resetFeed}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg outline-none duration-300 hover:bg-gray-700 transition-colors"
          >
            Reset
          </button>
        </div>
        
        {showSaved && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowSaved(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full max-h-96 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4">Saved Items</h2>
              {savedItems.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No items saved yet</p>
              ) : (
                <div className="space-y-3">
                  {savedItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 text-black">
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-green-600 font-bold text-sm">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

        <div className="relative flex justify-center items-center h-96">
          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">All done!</h3>
              <p className="text-gray-600">You&apos;ve seen all items. Reset to see them again.</p>
            </div>
          ) : (
            items.slice(0, 3).map((item, index) => (
              <SwipeCard
                key={item.id}
                item={item}
                onSwipe={handleSwipe}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default SwipeFeed;