
interface headingProp {
    title:string
}


export default function Heading(props:headingProp) {
  return (
    <>
    <h1 data-aos="" className="heading">{props.title}</h1>
    </>
    
  )
}
