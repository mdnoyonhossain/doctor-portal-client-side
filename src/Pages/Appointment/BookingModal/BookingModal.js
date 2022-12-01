import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatmentName, price, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const slot = form.selectedSlot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            slot,
            treatment: treatmentName,
            patient: name,
            email,
            phone,
            price
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success(`${name}! Your Book Appointment Confirmed`);
                    refetch();
                }
                else{
                    toast.error(data.message)
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>

                    <form onSubmit={handleSubmit} action="" className="mt-10 space-y-6 ng-untouched ng-pristine ng-valid">
                        <div className="space-y-1 text-sm">
                            <input type="text" name="username" disabled value={date} className="w-full px-4 py-3 rounded-md border-gray-700 border text-gray-800 focus:border-violet-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <select name='selectedSlot' className="select select-bordered w-full">
                                {
                                    slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                                }
                            </select>
                        </div>
                        <div className="space-y-1 text-sm">
                            <input type="text" name="name" defaultValue={user ? user?.displayName : 'Not Name'} disabled className="w-full px-4 py-3 rounded-md border-gray-700 border text-gray-800 focus:border-violet-400" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input type="email" name="email" defaultValue={user ? user?.email : 'SignIn Your Email'} disabled className="w-full px-4 py-3 rounded-md border-gray-700 border text-gray-800 focus:border-violet-400" required />
                        </div>
                        <div className="space-y-1 text-sm">
                            <input type="text" name="phone" placeholder='Phone' className="w-full px-4 py-3 rounded-md border-gray-700 border text-gray-800 focus:border-violet-400" required />
                        </div>
                        <button className="block w-full p-3 text-center rounded text-white bg-[#3A4256]">SUBMIT</button>

                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;