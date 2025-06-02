
interface headingProp {
    title:string
}


export default function Heading(props:headingProp) {
  return (
    <>
    <h1 data-aos="">{props.title}</h1>
    </>
    
  )
}
