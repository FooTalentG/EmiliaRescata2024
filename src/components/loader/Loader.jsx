const Loader = ({ size = 50 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="border-8 border-opacity-50 border-gray-800 border-l-white rounded-full animate-spin"
    />
  )
}

export default Loader
