import Button from './Button';

const ModalWindow = ({ onClick }) => {
  return (
    <div className="overlay" onClick={onClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <Button variant="closeButton">&times;</Button>
        <h2 className="modalHeader">Confirm Your Action</h2>
        <div className="modalBody">
          Are you sure you want to proceed? This action cannot be undone.
        </div>
        <div className="modalFooter">
          <Button onClick={() => onClick} variant="secondaryButton">
            Cancel
          </Button>
          <button
            className="primaryButton"
            onClick={() => {
              alert('Ok');
              onClick;
            }}
          >
            Yes, Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
