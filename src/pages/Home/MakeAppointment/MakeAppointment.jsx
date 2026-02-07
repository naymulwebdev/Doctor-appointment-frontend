import React from 'react';


const MakeAppointment = () => {

    // ===========form er value tular jonno===============
    
    const handleMakeAppoinment = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const appointmentData = Object.fromEntries(formData.entries())
        console.log(appointmentData);
        
        // const name = form.fullname.value;
        // const email = form.email.value;
        // const phone = form.phone.value;
        

    }

    
    return (
        <div className="px-4 md:px-10 md:pt-10 pb-2 mb-10">
            
            <h2 className="text-3xl font-bold bg-secondary py-7 text-center">
                Make An Appointment
            </h2>

            <form onSubmit={handleMakeAppoinment} className="">

                <div className='flex flex-col md:flex-row gap-8 mt-10'>
                    {/* LEFT SIDE */}
                <div className="flex-1">

                    {/* Full Name */}
                    <div className="relative mt-6">
                        <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            required
                            className="peer input w-full px-3 pt-6 pb-2 border
                                       focus:outline-none focus:border-secondary"
                        />
                        <label
                            htmlFor="fullname"
                            className="absolute left-3 top-4 text-gray-500 text-sm
                                       transition-all duration-300
                                       peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary
                                       peer-valid:top-1 peer-valid:text-xs"
                        >
                            Full Name
                        </label>
                    </div>

                    {/* Phone */}
                    <div className="relative mt-6">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            className="peer input w-full px-3 pt-6 pb-2 border
                                       focus:outline-none focus:border-secondary"
                        />
                        <label
                            htmlFor="phone"
                            className="absolute left-3 top-4 text-gray-500 text-sm
                                       transition-all duration-300
                                       peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary
                                       peer-valid:top-1 peer-valid:text-xs"
                        >
                            Phone Number
                        </label>
                    </div>

                    {/* Additional Info */}
                    <div className="relative mt-6">
                        <input
                            type="text"
                            name="additionalInfo"
                            id="additionalInfo"
                            required
                            className="peer input w-full px-3 pt-6 pb-2 border
                                       focus:outline-none focus:border-secondary"
                        />
                        <label
                            htmlFor="additionalInfo"
                            className="absolute left-3 top-4 text-gray-500 text-sm
                                       transition-all duration-300
                                       peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary
                                       peer-valid:top-1 peer-valid:text-xs"
                        >
                            Additional Information
                        </label>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex-1">

                    {/* Email */}
                    <div className="relative mt-6">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="peer input w-full px-3 pt-6 pb-2 border
                                       focus:outline-none focus:border-secondary"
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-3 top-4 text-gray-500 text-sm
                                       transition-all duration-300
                                       peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary
                                       peer-valid:top-1 peer-valid:text-xs"
                        >
                            Email
                        </label>
                    </div>

                    {/* Department */}
                    <div className="relative mt-6">
                        <input
                            type="text"
                            name="department"
                            id="department"
                            required
                            className="peer input w-full px-3 pt-6 pb-2 border
                                       focus:outline-none focus:border-secondary"
                        />
                        <label
                            htmlFor="department"
                            className="absolute left-3 top-4 text-gray-500 text-sm
                                       transition-all duration-300
                                       peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary
                                       peer-valid:top-1 peer-valid:text-xs"
                        >
                            Department
                        </label>
                    </div>

                    {/* Date & Time */}
                    <div className="relative mt-6">
                        <input
                            type="datetime-local"
                            name="dateTime"
                            id="dateTime"
                            required
                            className="peer input w-full px-3 pt-6 pb-2 border
                                       focus:outline-none focus:border-secondary"
                        />
                        <label
                            htmlFor="dateTime"
                            className="absolute left-3 top-4 text-gray-500 text-sm
                                       transition-all duration-300
                                       peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary
                                       peer-valid:top-1 peer-valid:text-xs"
                        >
                         Time & Date   
                        </label>
                    </div>

                </div>
                </div>
                <input className='flex h-14 text-center w-50 mx-auto justify-center mt-10 bg-primary' value="Confirm" type="submit" />
            </form>

            {/* Submit Button */}
            {/* <div className="flex h-14 text-center w-50 mx-auto justify-center mt-10">
                <button className='flex h-14 text-white items-center w-50 mx-auto justify-center mt-10 bg-primary'>Confirm</button>
            </div> */}

        </div>
    );
};

export default MakeAppointment;
