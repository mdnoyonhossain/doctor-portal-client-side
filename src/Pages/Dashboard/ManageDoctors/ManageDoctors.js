import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctors, setDeletingDoctors] = useState(null);

    const closeModal = () => {
        setDeletingDoctors(null)
    }


    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json();
            return data;
        }
    });

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor?._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success(`${doctor.name} Doctor Delete Successfully.`);
                refetch()
            }
        })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-6'>
            <h3 className='text-3xl font-bold'>Manage Doctors</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id} className="hover">
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctors(doctor)} htmlFor="confirmationModal" className="btn btn btn-sm bg-red-500" >Delete</label >
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingDoctors && <ConfirmationModal
                    title={`Are you sure you want to Delete?`}
                    message={`If you Delete ${deletingDoctors.name} It cannot be undone.`}
                    successAction={handleDeleteDoctor}
                    modalData={deletingDoctors}
                    successBtn="Delete"
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;