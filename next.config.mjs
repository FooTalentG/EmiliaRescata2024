/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.google.com']
  }
}

import withVideos from 'next-videos'

export default withVideos(nextConfig)
