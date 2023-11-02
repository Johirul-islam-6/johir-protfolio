/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";




const singelProject = () => {
    
    const {id} = useParams()
      const [loading, setLoading] = useState(true);
    const [links, setLink] = useState('')
    const [links2, setLink2] = useState('')

    const [product, setProduct] = useState()

    const routeChange = (data) => {
        const transfer = data?.link;
        setLink(transfer)

    }
    const routeChange2 = (data) => {
        const transfer = data?.git;
        setLink2(transfer)

    }

      useEffect(() => {
    fetch(`https://web-technology-server-site.vercel.app/simple-project/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0], "insite")
        setProduct(data[0]);
        setLoading(false);
      });
  }, [id]);

   if (loading) {
    return (
      <>
        <div className="center h-[90vh]">
          loading
        </div>
      </>
    );
  }



    return (
        <>
            <div className='w-[100%]  bg-[#07091a] md:px-20'>

                <h1 className='py-14 text-4xl text-center fonts pt-24'>{product?.name} Project Details</h1>

                <div className="">
                    <div key={product?.id} className="grid gird-cols-1 md:grid-cols-3 gap-x-5">
                        <figure><img loading="lazy" className='h-[50vh] flex mx-auto' src={product?.img} alt="product image" /></figure>
                        <figure><img loading="lazy" className='h-[50vh] my-10 md:my-0 flex mx-auto' src={product?.img2} alt="product image" /></figure>
                        <figure><img loading="lazy" className='h-[50vh] flex mx-auto' src={product?.img3} alt="product image" /></figure>

                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Site Title : {product?.name}</h2>
                        <p className='text-[22px] text-amber-600 font-bold'>Features This Site</p>
                        <p className='text-[16px]'>{product?.features}</p>
                        <p className='text-[16px]'>{product?.features2}</p>
                        <p className='text-[16px]'>{product?.features3}</p>
                        <p className='text-[16px]'>{product?.features4}</p>
                        <p className='text-[16px]'>{product?.features5}</p>
                        <p className='text-[18px] text-gray-100'>Technology :  {product?.technology}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between mt-10">
                            <a href={`${links}`} onClick={() => routeChange(product)} className='btn  py-[5px] btn-primary mt-3 md:ml-16 ml-2  md:block z-50'><span className='text-white underline cursor-pointer text-sm px-5 py-1 pt-2 z-50'>live site.com</span></a>
                            <a href={`${links2}`} onClick={() => routeChange2(product)} className='btn  py-[5px] btn-primary mt-3 md:ml-16 ml-2  md:block z-50'><span className='text-white underline cursor-pointer text-sm px-5 py-1 pt-2 z-50'>GitHub Link</span></a>
                        </div>
                        <h1 className='text-center text-green-500 pt-5 text-[18px] uppercase'>💖 Thank you 💖</h1>

                    </div>


                </div>
            </div>
        </>
    );
};

export default singelProject;