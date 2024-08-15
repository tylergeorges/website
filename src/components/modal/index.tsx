'use client';

import { useCallback, useEffect, useState } from 'react';

import { useKeyPress } from '@/hooks/use-key-press';
import { flushSync } from 'react-dom';
import { ModalSystem, type ModalContent, type ModalData } from './system';

interface ModalProps {
  modal: ModalData;
  removeModal: (modal: ModalData) => void;
  children: ModalContent;
}

const Modal = ({ modal, removeModal, children }: ModalProps) => {
  const [visible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    document.body.style.overflowY = 'hidden';
    document.body.style.marginRight = '17px';

    return () => {
      document.body.style.overflowY = '';
      document.body.style.marginRight = '';
    };
  }, []);

  const deleteModal = () => {
    if (!visible) return;

    setIsVisible(false);

    removeModal(modal);
  };

  if (modal.close && visible) {
    deleteModal();
  }

  return (
    <>
      <div role="dialog" className="absolute flex size-full flex-1 center">
        {children(modal.id)}
      </div>

      <div className="absolute left-0 -z-0 min-h-screen w-full" onClick={deleteModal} aria-hidden />
    </>
  );
};

export const ModalRenderer = () => {
  const [modals, setModals] = useState<ModalData[]>([]);

  const removeModal = useCallback((modal: ModalData) => {
    setModals(modals => modals.filter(m => m.id !== modal.id));

    ModalSystem.close(modal.id);
  }, []);

  useEffect(
    () =>
      ModalSystem.subscribe(data => {
        if (data.close) {
          setModals(modals => modals.map(m => (m.id === data.id ? { ...m, close: true } : m)));

          return;
        }

        setTimeout(() => {
          flushSync(() => {
            setModals(modals => {
              const modalExistsIndex = modals.findIndex(m => m.id === data.id);

              if (modalExistsIndex !== -1) {
                return [
                  ...modals.slice(0, modalExistsIndex),
                  { ...modals[modalExistsIndex], ...data },
                  ...modals.slice(modalExistsIndex + 1)
                ];
              }

              return [...modals, data];
            });
          });
        });
      }),
    []
  );

  useKeyPress('Escape', () => {
    if (modals.length) {
      ModalSystem.close(modals[0].id);
    }
  });

  if (!modals.length) return null;

  return (
    <section aria-label="Notifications alt+T" tabIndex={-1} className="relative">
      <div tabIndex={-1} className="absolute h-screen w-full">
        <div className="fixed z-10 flex h-full w-full items-center justify-center overflow-hidden">
          {modals.map(modal => (
            <Modal key={modal.id} modal={modal} removeModal={removeModal}>
              {modal.content as ModalContent}
            </Modal>
          ))}
        </div>
      </div>
    </section>
  );
};
