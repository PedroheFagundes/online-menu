import Link from "next/link";

const SectionCard = (props: { section: string, position: string, name: string }) => {

    return (
        <Link href={`/${props.section}`} passHref>
            <div className={`h23pc d-flex justify-content-${props.position} || cursor`}>
                <div className=" text-white fs-2 || rounded10 h100pc w300 bg-center" style={{backgroundImage: `url("/${props.section}.png")`}}>
                    <div className="ms-3 mt-3 || w170 font-inknut">{props.name}</div>
                </div>
            </div>
        </Link>
    )
  }
  
  export default SectionCard;