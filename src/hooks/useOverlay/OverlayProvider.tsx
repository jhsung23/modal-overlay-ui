import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import Backdrop from '../../components/Backdrop';

export type OverlayMethod = { close: () => void; closeAll: () => void };
export type OverlayElementCreator = (props: OverlayMethod) => ReactNode;

export const OverlayContext = createContext<{
  mount(id: number, overlayElementCreator: OverlayElementCreator): void;
  unmount(id: number): void;
} | null>(null);

const OverlayProvider = ({ children }: PropsWithChildren) => {
  const [overlayId, setOverlayId] = useState<Map<number, OverlayElementCreator>>(new Map());

  const mount = useCallback((id: number, overlayElementCreator: OverlayElementCreator) => {
    setOverlayId((prev) => {
      const cloned = new Map(prev);
      cloned.set(id, overlayElementCreator);
      return cloned;
    });
  }, []);

  const unmount = useCallback((id: number) => {
    setOverlayId((prev) => {
      const cloned = new Map(prev);
      cloned.delete(id);
      return cloned;
    });
  }, []);

  const unmountAll = useCallback(() => {
    setOverlayId(new Map());
  }, []);

  const context = useMemo(() => ({ mount, unmount, unmountAll }), [mount, unmount, unmountAll]);

  return (
    <OverlayContext.Provider value={context}>
      {children}
      {[...overlayId.entries()].map(([id, overlayElementCreator]) =>
        createPortal(
          <React.Fragment key={id}>
            <Backdrop onClose={() => unmount(id)} />
            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
              {overlayElementCreator({ close: () => unmount(id), closeAll: () => unmountAll() })}
            </div>
          </React.Fragment>,
          document.querySelector('#overlay')!
        )
      )}
    </OverlayContext.Provider>
  );
};

export default OverlayProvider;
