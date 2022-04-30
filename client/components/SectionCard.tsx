import Link from "next/link";

const SectionCard = (props: { icon: string, title: string }) => {

    return (
        <Link href="/" passHref>
            <div className="h20pc d-flex justify-content-start">
                <div className=" text-white fs-1 || rounded10 h100pc w300 bg-center" style={{backgroundImage: 'url("/entradas.png")'}}>
                    <div className="ms-3 mt-2 || font-inknut">Entradas</div>
                </div>
            </div>
        </Link>
    )
  }
  
  export default SectionCard;