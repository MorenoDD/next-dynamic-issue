import style from './video.module.css'

const Video = () => {
    return (
        <div className={style.wrapper}>
            <video autoPlay playsInline muted loop>
                <source src="https://ideabile.morenodd.com/uploads/Ideabile_landing_blob_1920x1080.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Video