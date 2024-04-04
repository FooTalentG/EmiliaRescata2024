import video from "@/assets/videos/videoEmilia.mp4"

export default () => (
  <div>
    <video
      src={video}
      controls
      className="flex w-full h-auto px-2 lg:justify-center lg:w[800px] lg:h-[700px] lg:px-16 xl:px-32"
      muted
      playsInline
      autoPlay
    />
  </div>
)