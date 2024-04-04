import Image from 'next/image'

const ImageTV = ({ src, alt, linkText, linkUrl }) => (
  <div className="flex flex-col items-center space-y-2.5">
    <div className="w-[300px] md:w-full rounded-3xl overflow-hidden border-[20px] border-[#3D82AD] bg-[#3D82AD]">
      <Image
        src={src}
        width="auto"
        height="auto"
        alt={alt}
      />
    </div>
    <div className="w-[35%] h-[15px] bg-[#3D82AD] self-center rounded-lg"></div>
    {linkText && (
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-black hover:text-[#6D0401] text-2xl font-semibold underline leading-loose"
      >
        {linkText}
      </a>
    )}
  </div>
)

export default ImageTV
