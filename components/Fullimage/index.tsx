import style from './fullimage.module.css'
import Image from 'next/image'

const Fullimage = () => {
    return (
        <div className={style.wrapper}>
            <Image src="https://unsplash.it/800/400" width="800" height="400" alt="Image" />
        </div>
    )
}

export default Fullimage