'use client'

import { useState } from 'react';
import Header from '../components/Header';
import TrainerInfo from '../components/TrainerInfo';
import EventBanner from '../components/EventBanner';
import PointsCard from '../components/PointsCard';
import HistoryList from '../components/HistoryList';
import BottomNav from '../components/BottomNav';
import UsePointsModal from '../components/modals/UsePointsModal';
import HistoryModal from '../components/modals/HistoryModal';

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  
  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };
  
  const closeModal = () => {
    setActiveModal(null);
  };
  
  return (
    <div className="container">
      <Header title="ポイントマスター" />
      
      <main>
        <TrainerInfo name="トレーナー" level={25} progress={75} />
        
        <EventBanner 
          title="ダブルポイントイベント!"
          description="期間中、獲得ポイントが2倍になります！"
          timeRemaining="残り時間: 2日 5時間 30分"
          icon="🎉"
        />
        
        <PointsCard 
          points={[
            { type: 'normal', name: '通常ポイント', amount: 3450, expires: '2025年12月31日' },
            { type: 'limited', name: '期間限定ポイント', amount: 1200, expires: '2025年6月30日' }
          ]}
          upcoming={[
            { type: 'normal', amount: 200, date: '2025/03/20' }
          ]}
          expiring={[
            { type: 'limited', amount: 300, date: '2025/04/01' }
          ]}
          onUsePoints={() => openModal('use')}
          onViewHistory={() => openModal('history')}
        />
        
        <HistoryList 
          history={[
            { type: 'gain', title: 'デイリーログインボーナス', date: '2025/03/13', points: 100 },
            { type: 'gain', title: 'ミッション達成報酬', date: '2025/03/12', points: 250 },
            { type: 'use', title: 'アイテム購入', date: '2025/03/10', points: 300 },
            { type: 'gain', title: 'スペシャルイベント報酬', date: '2025/03/08', points: 500 },
            { type: 'gain', title: 'レベルアップボーナス', date: '2025/03/05', points: 1000 },
            { type: 'use', title: 'ガチャ利用', date: '2025/03/01', points: 500 }
          ]}
        />
      </main>
      
      <BottomNav active="points" />
      
      {activeModal === 'use' && (
        <UsePointsModal
          title="ポイントを使う"
          points={[
            { type: 'normal', name: '通常ポイント', amount: 3450, expires: '2025年12月31日' },
            { type: 'limited', name: '期間限定ポイント', amount: 1200, expires: '2025年6月30日' }
          ]}
          items={[
            { id: 1, image: '/images/gift-card.png', title: '商品 1,000円分', cost: 1000, description: '商品券として使えます' },
            { id: 2, image: '/images/voucher.png', title: 'お食事券 2,000円分', cost: 2000, description: '全国の提携店で使えます' },
            { id: 3, image: '/images/ticket.png', title: '映画チケット', cost: 1500, description: '全国の映画館で利用可' },
            { id: 4, image: '/images/card.png', title: '図書カード 500円分', cost: 500, description: '全国の書店で使えます' },
            { id: 5, image: '/images/coffee.png', title: 'コーヒーチケット 5枚セット', cost: 1200, description: 'カフェで使えるチケット' }
          ]}
          totalPoints={4650}
          company="ABC株式会社"
          userName="吉田太郎"
          onClose={closeModal}
          onExchange={(item) => {
            // ポイント交換処理
            alert(`${item.title}と交換しました！`);
            closeModal();
          }}
        />
      )}
      
      {activeModal === 'history' && (
        <HistoryModal
          title="ポイント履歴"
          history={[
            { type: 'gain', title: 'デイリーログインボーナス', date: '2025/03/13', points: 100 },
            { type: 'gain', title: 'ミッション達成報酬', date: '2025/03/12', points: 250 },
            { type: 'use', title: 'アイテム購入', date: '2025/03/10', points: 300 },
            { type: 'gain', title: 'スペシャルイベント報酬', date: '2025/03/08', points: 500 },
            { type: 'gain', title: 'レベルアップボーナス', date: '2025/03/05', points: 1000 },
            { type: 'use', title: 'ガチャ利用', date: '2025/03/01', points: 500 }
          ]}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
