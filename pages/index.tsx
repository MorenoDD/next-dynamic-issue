import dynamic from 'next/dynamic'

const getDynamicComponent = (c) => dynamic(() => import(`/components/${c}`), {
  ssr: false,
  loading: () => <p>Loading {c}</p>
})


export default function Home() {

  const blocks = ['Hero', 'Fullimage']

  return(
    <>
    {
        blocks.map((block, i) => {
            const DynamicComponent = getDynamicComponent(block)
            return <DynamicComponent key={i} />
        })
    }
    </>
)



  return <>asd</>
}
