import React from "react";
// import Pdf from "react-to-pdf";
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaUserAlt, FaAngleRight, FaStop } from 'react-icons/fa';
// import { useRef } from "react";
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';
import pdf from "../../assets/pdf/Course-Outline.pdf"
// const ref = React.createRef();
// const options = {
//     orientation: 'landscape',
//     unit: 'in',
//     format: [15,15]
// };
const SingleCourse = () => {
    // const printRef = useRef();
    const course = useLoaderData();
    // console.log(course);
    // const handlePdfDown = () =>{
    //     console.log("clicked");
    // }
    const handleDownloadPdf = async () => {
        // const element = printRef.current;
        // const canvas = await html2canvas(element);
        // const data = canvas.toDataURL('image/png');
    
        // const pdf = new jsPDF();
        // const imgProperties = pdf.getImageProperties(data);
        // const pdfWidth = pdf.internal.pageSize.getWidth();
        // const pdfHeight =
        //   (imgProperties.height * pdfWidth) / imgProperties.width;
        // console.log(pdfWidth,pdfHeight);
        // pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        // pdf.save(`${course.title}.pdf`);
        // var fileDownload = require('js-file-download');
        // fileDownload(pdf,'Course-Outline.pdf');
      };
    return (
        <div >
            {/* <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4'> */}
            {/* <div className='grid-cols-1 ml-10'> */}
            <div className='mx-10'>
                <div>
                    <div>
                        {/* <Pdf targetRef={ref} filename="Course-Outline.pdf" options={options} >
                            {({ toPdf }) => <p className='text-center my-3'><span className='text-2xl '>
                                Download course outline <button className='btn dark:bg-white dark:text-black hover:text-white dark:hover:bg-black dark:hover:text-white  border-none bg-black text-white hover:bg-slate-400' onClick={toPdf}>Download pdf</button></span></p>}
                        </Pdf> */}
                        <p className='text-center my-3'><span className='text-2xl '>
                                Download course outline <button className='btn dark:bg-white dark:text-black hover:text-white dark:hover:bg-black dark:hover:text-white  border-none bg-black text-white hover:bg-slate-400' onClick={handleDownloadPdf}>Download pdf</button></span></p>
                        {/*  */}
                    </div>
                    {/* <p className='text-center my-3'><span className='text-2xl '>
                    Download course outline <button className='btn dark:bg-white dark:text-black hover:text-white dark:hover:bg-black dark:hover:text-white  border-none bg-black text-white hover:bg-slate-400' onClick={handlePdfDown}>Download pdf</button>
                    </span>
                    </p> */}
                    {/* ref={ref} ref={printRef}*/}
                    <div >
                        <img src={course.img} alt="" className='w-full' />
                        <div className='flex justify-items-center items-center mt-3 w-1/3 md:mx-auto'>
                            <img src={course.author_img} alt="" className='w-20' style={{
                                borderRadius: '50%'
                            }} />
                            <div className='ml-2'>
                                <p className='text-2xl text-center mt-2'>{course.created_by}</p>
                                <p className='flex justify-items-center items-center mt-3'><FaStop />Last updated: {course.updated}</p>
                            </div>
                        </div>
                        <p className='my-5 text-2xl font-bold'>{course.title}</p>
                        <p className='my-5'>{course.description}</p>
                        <div>
                            <p className='flex justify-between text-2xl'><span>Duration: {course.duration}H</span><span className='flex justify-items-center items-center'><FaStar className='mr-1' />{course.rating}</span><span className='flex justify-items-center items-center'><FaUserAlt className='mr-1' />{course.students}</span></p>
                            <p className='text-4xl text-center my-4 font-bold'>Price: ${course.price}</p>
                        </div>
                        <div className='border-2 p-2 my-5'>
                            <p className='text-3xl mb-2'>What you will learn?</p>
                            {
                                course.learning.map((learn, idx) =>
                                    <p key={idx} className="flex"><FaAngleRight className='mt-1' />{learn}</p>)
                            }
                        </div>
                        <div className='mb-3'>
                            <p className='text-3xl'>Requirements</p>
                            {
                                course.requirements.map((req, idx) => <p key={idx} className="flex"><FaAngleRight className='mt-1' />{req}</p>)
                            }
                        </div>
                    </div>
                    <div className='mb-5 text-center'>
                        <Link to={`/checkout/${course.id}`}><button className="btn bg-[#00b58b] border-none  dark:hover:text-[#00b58b] dark:hover:bg-white">Get premium access</button></Link>
                    </div>
                </div>
            </div>
            {/* <div className='grid-cols-1 text-center'>
                <h1 className='text-4xl font-bold'>Checkout</h1>
                <p>Item: 1</p>
                <p>Total: {course.price}</p>
                <p>Tax: {(course.price * 0.10).toFixed(2)}</p>
                <p>Grand Total: {parseFloat(course.price) + parseFloat((course.price * 0.10).toFixed(2))}</p>
                {
                    // jod user thake tahole modal wala button ta ui te dekhabo
                    // user na thakle navigate kore felbe sherkm button dekhabo
                    //chill
                }
                <label htmlFor="my-modal" className="btn modal-button bg-[#00b58b] border-none">Buy Now</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg dark:text-black">Congratulations!!!</h3>
                        <p className="py-4 dark:text-black">You've successfully enrolled. Please check your email.</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Okay</label>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default SingleCourse;