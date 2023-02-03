import React from 'react'
import { useState, useEffect } from 'react'
import {Card, FormField, Loader} from "../components"

const RenderCards = ({data,title}) =>{
  if(data?.length>0) 
    return (
    data.map((post) => <Card key={post._id} {...post} />)
  );

  return(
    <h2 className='mt-5 font-bold text-[#g449ff] text-xl
    uppercase'>{title}</h2>
  )
}


const Home = () => {
  const [loading,setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [searchtext, setSearchtext] = useState('Hello')

  

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
  
      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          const result = await response.json();
          setAllPosts(result.data.reverse());
        }
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    };
  }, []);

  return (
    <section className='max-w-7xl mx-auto' >
        <div>
          <h1 className=' font-bold text-gray-800 text-[32px]'>The Community Showcase</h1>
          <p className='text-[17px] mt-2px max-w[500px]'>Browse through a collection of imaginative and visually stunning images generated using DALL-E</p>
        </div>

        <div className='mt-16'>
          <FormField />
        </div>

        <div className=''>
            {loading ? (
              <div className='flex justify-center items-center'>
                <Loader />
               </div>
            ) : <>
                {searchtext && (
                  <h2 className='font-medium text-[#666e75] mt-2 text-xl mb-3'>
                    Showing results for <span className='text-[#222328]'>{searchtext}</span>
                  </h2>
                )}

                <div className='grid lg:grid-col-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
                  {searchtext ? (
                    <RenderCards 
                    data={[]}
                    title="No search results found"
                    />
                  ) : (
                    <RenderCards 
                    data={allPosts}
                    
                    /> 
                  )
                  
                  }
                </div>
            </>}
        </div>

    </section>
  )
}

export default Home