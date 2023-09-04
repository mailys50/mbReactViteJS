/* eslint-disable react/jsx-key */
import images from "../../assets/imagenes"
import "./slides.css"
import { motion } from "framer-motion"
function Slides() {
    return (
        <motion.div className="slider-container">
            <motion.div className="slider" drag="x">
                {images.map(image => (
                    <motion.div className="item">
                        <img src={image} alt="fotos" />
                    </motion.div>

                )

                )}
            </motion.div>
        </motion.div>
    )
}

export default Slides
