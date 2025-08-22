import { ModalWindowProps } from '../types';

export default function Modal({
  closeModal,
  title = 'Title',
  content = 'content',
  children,
}: ModalWindowProps) {
  return (
    <div className="overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2 className="modalHeader">{title}</h2>
        <div className="modalBody">{content}</div>
        <div className="modalFooter">{children}</div>
      </div>
    </div>
  );
}
