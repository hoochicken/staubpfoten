import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import CharacterSelect from '@/components/game/CharacterSelect';
import EndScreen from '@/components/game/EndScreen';
import MapScreen from '@/components/game/MapScreen';
import RoomScreen from '@/components/game/RoomScreen';
import type { NodeId } from '@/game/data';
import { currentStat, drawLayout, gameReducer, initialState, rollD6 } from '@/game/engine';

const ROLL_MS = 550;

type View = 'map' | 'room';

const Index = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const [view, setView] = useState<View>('map');
  const [rolling, setRolling] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  const handleRoll = useCallback(() => {
    if (rolling || state.phase !== 'play' || !state.character) return;
    const stat = currentStat(state);
    const value = rollD6();

    setRolling(true);
    timer.current = window.setTimeout(() => {
      dispatch({ type: 'ROLL', value, stat });
      setRolling(false);
      timer.current = null;
    }, ROLL_MS);
  }, [rolling, state]);

  const handleAdvance = useCallback((to: NodeId) => {
    dispatch({ type: 'ADVANCE', to });
    setView('room');
  }, []);

  const handleRestart = useCallback(() => {
    if (timer.current !== null) window.clearTimeout(timer.current);
    setRolling(false);
    setView('map');
    dispatch({ type: 'RESTART' });
  }, []);

  if (state.phase === 'select' || !state.character) {
    return (
      <CharacterSelect
        onSelect={(id) => {
          setView('map');
          dispatch({ type: 'SELECT', id, layout: drawLayout() });
        }}
      />
    );
  }

  if (state.phase === 'won' || state.phase === 'lost') {
    return <EndScreen state={state} onRestart={handleRestart} />;
  }

  if (view === 'map') {
    return (
      <MapScreen
        state={state}
        onStart={() => setView('room')}
        onAdvance={handleAdvance}
        onBackToRoom={() => setView('room')}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <RoomScreen
      state={state}
      rolling={rolling}
      onRoll={handleRoll}
      onOpenMap={() => setView('map')}
      onRestart={handleRestart}
    />
  );
};

export default Index;
