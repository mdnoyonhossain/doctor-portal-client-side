import React from 'react';

const ConfirmationModal = ({title, message, closeModal, successAction, modalData, successBtn}) => {
    return (
        <div>
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmationModal" className="btn">{successBtn}</label>
                        <button onClick={closeModal} className='btn btn-outline'>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;