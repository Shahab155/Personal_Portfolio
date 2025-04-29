
interface headingProp {
    title:string
}


export default function Heading(props:headingProp) {
  return (
    <>
    <h1 data-aos="zoom-in-up">{props.title}</h1>
    </>
    
  )
}
