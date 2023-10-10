import Image from "next/image";
import topLeftImage from '../../public/top-left-img.png'

const TopLeftImg = () => {
  return (
    <div>
      <Image src={topLeftImage} width={400} alt="" />
    </div>
  )
};

export default TopLeftImg;
