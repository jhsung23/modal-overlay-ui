import { useCallback, useContext } from 'react';
import { OverlayContext, OverlayElementCreator } from './OverlayProvider';

const useOverlay = () => {
  const context = useContext(OverlayContext);

  if (context === null) {
    throw new Error('OverlayProvider가 필요합니다.');
  }

  const { mount } = context;

  const openOverlay = useCallback(
    (overlayElementCreator: OverlayElementCreator) => {
      mount(Date.now(), overlayElementCreator);
    },
    [mount]
  );

  return openOverlay;
};

export default useOverlay;
