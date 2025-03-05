import Image from "next/image";


export function Selection(props: { data: {path: string, index: number}[], index: number, closeSelection: () => void }){

    return(
        <div>
             <Image src={props.data[props.index].path} alt="selectimage"  width={80} height={50}/>
             <div className="under-slider-container">{props.data.map((e, i) => <Image key={i} className={e.index === props.index ? "selected-image-of-slider" : ""} src={e.path} alt="picture-of-slider" width={80} height={50}/>)}</div>
        </div>
    )
}