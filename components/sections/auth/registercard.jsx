import { Formik } from "formik";
import Image from "next/image";

export default function logincard() {
    return (
        <>
            <div className='bg-black bg-opacity-40 backdrop-blur-lg p-4 rounded-md text-center shadow-lg'>
                <h1 className='text-2xl text-white'>Register</h1>
                <div>
                    <Formik
                        initialValues={{ email: '', password: '' ,ign:''}}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='mt-4 mb-4'>
                                    <div className='text-white text-sm'>IGN</div>
                                    <input
                                        className='bg-white text-white backdrop-blur-md bg-opacity-30 p-2 border-2 border-none outline-none'
                                        type="ign"
                                        name="ign"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.ign}
                                    />
                                    <div className='text-red-500'>{errors.ign && touched.ign && errors.ign}</div>
                                </div>

                                <div className='mt-4 mb-4'>
                                    <div className='text-white text-sm'>Email</div>
                                    <input
                                        className='bg-white text-white backdrop-blur-md bg-opacity-30 p-2 border-2 border-none outline-none'
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <div className='text-red-500'>{errors.email && touched.email && errors.email}</div>
                                </div>
                                <div className='mt-4 mb-4'>
                                    <div className='text-white text-sm'>Password</div>
                                    <input
                                        className='bg-white text-white backdrop-blur-md bg-opacity-30 p-2 border-2 border-none outline-none'
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    {errors.password && touched.password && errors.password}
                                </div>
                                <div className='mt-4'>
                                    <button type="submit" disabled={isSubmitting} className=''>
                                        <Image src="/icons/submit_button.svg" alt="submit" width={40} height={40} />
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
};
