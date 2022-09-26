import missing_image from '../images/missing-preview.svg'

const Preview = (image) => {
   if (!image) return missing_image

   return image
}

export default Preview